import { connectToDatabase, Contact } from "../../src/lib/db";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
// Création du transporter avec debug activé
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // false pour port 587 (STARTTLS), true pour 465 (SSL direct)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    logger: true, // Affiche les logs dans la console
    debug: true, // Active le débogage SMTP
});
export const handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
    };
    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers
        };
    }
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: "Méthode non autorisée" })
        };
    }
    try {
        // Connexion à la base MongoDB
        await connectToDatabase();
        // Récupérer les entrées du formulaire
        const contacts = await Contact.find().sort({ createdAt: -1 });
        // Construction de l'e-mail
        const emailContent = {
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL,
            subject: "📊 Export des données formulaire - Le Bon Dépanneur",
            text: `Voici l'export des données du formulaire de contact au ${new Date().toLocaleString('fr-FR')}.\n\nNombre total d'entrées : ${contacts.length}`,
            attachments: [
                {
                    filename: `export-formulaires-${new Date().toISOString().split('T')[0]}.json`,
                    content: JSON.stringify(contacts, null, 2)
                }
            ]
        };
        // Affichage du contenu avant envoi
        console.log("📨 Envoi de l'email en cours...");
        await transporter.sendMail(emailContent);
        console.log("✅ Email envoyé !");
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: "✅ Les données ont été envoyées par email avec succès",
                totalEntries: contacts.length
            })
        };
    }
    catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'email :", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: "Une erreur est survenue lors de l'envoi de l'email"
            })
        };
    }
};
