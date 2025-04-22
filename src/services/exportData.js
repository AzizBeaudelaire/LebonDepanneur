export const exportFormData = async () => {
    try {
        const response = await fetch('/.netlify/functions/sendFormData');
        if (!response.ok) {
            throw new Error('Erreur lors de l\'export des données');
        }
        const data = await response.json();
        console.log('Export réussi:', data);
        return data;
    }
    catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};
