import { connectToDatabase, Contact } from "../../src/lib/db";
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
};
export const handler = async (event) => {
    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: corsHeaders
        };
    }
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: corsHeaders,
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
                    headers: corsHeaders,
                    body: JSON.stringify({ error: `Le champ ${field} est requis` })
                };
            }
        }
        const newContact = new Contact(data);
        await newContact.save();
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
                message: "Formulaire envoyé avec succès !",
                contact: newContact
            })
        };
    }
    catch (error) {
        console.error("Erreur serveur :", error);
        return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({
                error: "Une erreur est survenue lors de l'enregistrement du formulaire"
            })
        };
    }
};
