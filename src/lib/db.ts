import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ MONGODB_URI n'est pas défini dans le fichier .env");
}

// Évite les reconnections multiples
let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ Connecté à MongoDB Atlas");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    throw error;
  }
};

// Schéma du formulaire
const contactSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  vehicleModel: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Modèle Mongoose
export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);