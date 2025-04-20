import { Handler } from "@netlify/functions";
import { connectToDatabase, Contact } from "../../src/lib/db";

export const handler: Handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Méthode non autorisée" })
    };
  }

  try {
    await connectToDatabase();

    const data = JSON.parse(event.body || "{}");

    // Validate required fields
    const requiredFields = ['date', 'name', 'email', 'phone', 'service', 'vehicleModel', 'message'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: `Le champ ${field} est requis` })
        };
      }
    }

    const newContact = new Contact(data);
    await newContact.save();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: "Formulaire envoyé avec succès !",
        contact: newContact
      })
    };
  } catch (error) {
    console.error("Erreur serveur :", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: "Une erreur est survenue lors de l'enregistrement du formulaire" 
      })
    };
  }
};