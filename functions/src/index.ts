import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();
const db = admin.firestore();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass
  }
});

// Send email when new contact is created
export const onContactCreated = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snap, context) => {
    const contact = snap.data();

    const mailOptions = {
      from: functions.config().email.user,
      to: 'hugo.mehdi197@gmail.com',
      subject: `Nouvelle demande de dépannage - ${contact.service}`,
      html: `
        <h2>Nouvelle demande de dépannage</h2>
        <p><strong>Nom:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Téléphone:</strong> ${contact.phone}</p>
        <p><strong>Service:</strong> ${contact.service}</p>
        <p><strong>Modèle du véhicule:</strong> ${contact.vehicleModel}</p>
        <p><strong>Message:</strong> ${contact.message}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });

// Scheduled function to delete old contacts (runs every hour)
export const cleanupOldContacts = functions.pubsub
  .schedule('every 1 hours')
  .onRun(async (context) => {
    const cutoff = admin.firestore.Timestamp.fromDate(
      new Date(Date.now() - 24 * 60 * 60 * 1000)
    );

    const snapshot = await db
      .collection('contacts')
      .where('createdAt', '<=', cutoff)
      .get();

    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Deleted ${snapshot.size} old contacts`);
  });