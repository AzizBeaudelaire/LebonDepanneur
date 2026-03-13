import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';
import { contactFormSchema, sendContactEmail, EmailSendError } from '../services/contact';
import { z } from 'zod';
// ✅ Logo Snapchat fidèle et colorable dynamiquement (Jaune/Thème)
const SnapchatIcon = ({ className }) => (React.createElement("svg", { className: className, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M12 2.5c-2.4 0-4.6 1-5.6 3-.2.5-.2 1-.2 1.4 0 .4 0 .7.1 1.1-.9.4-1.5 1.3-1.5 2.3 0 .7.3 1.3.8 1.7-.1.4-.2.8-.2 1.2 0 1.2.8 2.3 1.9 2.7-.4.4-.8.9-1.1 1.4-.8-.2-1.7-.1-2.4.3-.6.3-.8 1.1-.5 1.7.2.4.6.6 1 .6.2 0 .4 0 .6-.1.4-.2.8-.3 1.2-.3.3 0 .6.1.8.2.4.2.7.5 1 .8.2-.4.6-.7 1-.8.2-.1.5-.2.8-.2.4 0 .8.1 1.2.3.2.1.4.1.6.1.4 0 .8-.2 1-.6.3-.6.1-1.4-.5-1.7-.7-.4-1.6-.5-2.4-.3-.3-.5-.7-1-1.1-1.4 1.1-.4 1.9-1.5 1.9-2.7 0-.4-.1-.8-.2-1.2.5-.4.8-1 .8-1.7 0-1-.6-1.9-1.5-2.3.1-.4.1-.7.1-1.1 0-.4 0-.9-.2-1.4-1-2-3.2-3-5.6-3z" })));
const COOLDOWN_TIME = 100; // Temps d'attente en secondes
const serviceOptions = {
    transport: "Transport de véhicule Europe",
    assistance: "Assistance routière urgente",
    depannage: "Dépannage mécanique Toulouse",
    remorquage: "Remorquage voiture / moto",
    levage: "Levage, Grutage & Treuillage",
    fourriere: "Enlèvement fourrière / épave",
    atelier: "Réparation rapide en atelier",
    clefs: "Ouverture de porte & Perte de clés",
    nettoyage: "Nettoyage & Detailing complet",
    "achat-revente": "Achat Véhicule Accidenté ou Épaves"
};
export const ContactPage = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicleModel: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [cooldownTime, setCooldownTime] = useState(0);
    const [isFormEnabled, setIsFormEnabled] = useState(true);
    useEffect(() => {
        let timer;
        if (cooldownTime > 0) {
            setIsFormEnabled(false);
            timer = setInterval(() => {
                setCooldownTime((prev) => {
                    if (prev <= 1) {
                        setIsFormEnabled(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timer)
                clearInterval(timer);
        };
    }, [cooldownTime]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormEnabled) {
            setErrorMessage(`Veuillez attendre ${cooldownTime} secondes avant de soumettre à nouveau le formulaire.`);
            return;
        }
        setIsSubmitting(true);
        setErrors({});
        setErrorMessage('');
        try {
            const validatedData = contactFormSchema.parse({
                ...formData,
                service: serviceOptions[formData.service] || formData.service
            });
            await sendContactEmail(validatedData);
            setFormData({
                date: '',
                name: '',
                email: '',
                phone: '',
                service: '',
                vehicleModel: '',
                message: ''
            });
            setSubmitStatus('success');
            setCooldownTime(COOLDOWN_TIME);
        }
        catch (error) {
            console.error('Erreur lors de la soumission:', error);
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(fieldErrors);
                setErrorMessage('Veuillez corriger les erreurs dans le formulaire.');
            }
            else if (error instanceof EmailSendError) {
                setErrorMessage(error.message);
            }
            else {
                setErrorMessage('Une erreur inattendue est survenue. Veuillez réessayer.');
            }
            setSubmitStatus('error');
        }
        finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitStatus('idle');
                setErrorMessage('');
            }, 5000);
        }
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: undefined
            });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "Contact D\u00E9pannage Auto Toulouse | Rachat \u00C9pave & Intervention 31"),
            React.createElement("meta", { name: "description", content: "Besoin d'un d\u00E9pannage voiture imm\u00E9diat \u00E0 Toulouse ? Contactez Le Bon Remorquage 24h/24 et 7j/7 pour toute assistance routi\u00E8re, erreur carburant ou achat de v\u00E9hicule accident\u00E9." })),
        React.createElement("div", { className: "min-h-screen bg-light-background py-12 transition-colors dark:bg-dark-background sm:py-16 lg:py-24" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid gap-12 lg:grid-cols-2" },
                    React.createElement("div", { className: "order-1 flex flex-col gap-8" },
                        React.createElement("section", { className: "rounded-2xl bg-white p-8 shadow-xl transition-colors dark:bg-dark-card border border-gray-100 dark:border-gray-800" },
                            React.createElement("h1", { className: "text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl" },
                                "Assistance & ",
                                React.createElement("span", { className: "text-light-primary" }, "D\u00E9pannage Urgent"),
                                " Toulouse"),
                            React.createElement("p", { className: "mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium" }, "Notre service d'auto secours est disponible 24h/24 et 7j/7 pour intervenir rapidement sur votre v\u00E9hicule en panne, accident\u00E9 ou pour une estimation de rachat d'\u00E9pave."),
                            React.createElement("div", { className: "mt-8 space-y-6" },
                                React.createElement("div", { className: "flex items-center space-x-5 group" },
                                    React.createElement("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary transition-transform group-hover:scale-110" },
                                        React.createElement(Phone, { className: "h-7 w-7" })),
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400" }, "Ligne d'Urgence 24/7"),
                                        React.createElement("a", { href: "tel:0768261050", className: "mt-1 block text-2xl font-black text-gray-900 dark:text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary" }, "07 68 26 10 50"))),
                                React.createElement("div", { className: "flex items-center space-x-5 group" },
                                    React.createElement("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-light-primary/10 group-hover:text-light-primary transition-colors" },
                                        React.createElement(MapPin, { className: "h-7 w-7" })),
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400" }, "Secteur 31 & Alentours"),
                                        React.createElement("p", { className: "mt-1 text-lg font-medium text-gray-900 dark:text-white" }, "Toulouse, Blagnac, Colomiers, Muret..."))),
                                React.createElement("div", { className: "flex items-center space-x-5 group" },
                                    React.createElement("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-light-primary/10 group-hover:text-light-primary transition-colors" },
                                        React.createElement(Mail, { className: "h-7 w-7" })),
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400" }, "Message & Devis"),
                                        React.createElement("a", { href: "mailto:contactlebondepannage@gmail.com", className: "mt-1 block text-base md:text-lg font-medium text-gray-900 dark:text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary break-all" }, "contactlebondepannage@gmail.com")))),
                            React.createElement("hr", { className: "my-8 border-gray-200 dark:border-gray-800" }),
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-sm font-bold text-gray-900 dark:text-white mb-4" }, "Envoyez-nous des photos de votre v\u00E9hicule pour un devis direct :"),
                                React.createElement("div", { className: "flex flex-wrap gap-3" },
                                    React.createElement("a", { href: "https://wa.me/33768261050", target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-2 rounded-xl bg-green-50 px-4 py-3 text-green-700 hover:bg-green-100 dark:bg-green-900/40 dark:text-green-400 font-semibold transition-colors" },
                                        React.createElement(MessageSquare, { className: "h-5 w-5" }),
                                        React.createElement("span", null, "WhatsApp")),
                                    React.createElement("a", { href: "https://www.snapchat.com/add/lebonremorquage", target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-2 rounded-xl bg-yellow-50 px-4 py-3 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-500 font-semibold transition-colors" },
                                        React.createElement(SnapchatIcon, { className: "h-5 w-5" }),
                                        React.createElement("span", null, "Snapchat")),
                                    React.createElement("a", { href: "https://www.instagram.com/lebon_remorquage/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-2 rounded-xl bg-pink-50 px-4 py-3 text-pink-700 hover:bg-pink-100 dark:bg-pink-900/40 dark:text-pink-400 font-semibold transition-colors" },
                                        React.createElement(Instagram, { className: "h-5 w-5" }),
                                        React.createElement("span", null, "Instagram"))))),
                        React.createElement("section", { className: "rounded-2xl bg-white p-8 shadow-xl transition-colors dark:bg-dark-card border border-gray-100 dark:border-gray-800" },
                            React.createElement("h2", { className: "text-xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-light-primary inline-block pb-2" }, "Questions Fr\u00E9quentes (FAQ)"),
                            React.createElement("div", { className: "space-y-6" },
                                React.createElement("div", { className: "border-l-4 border-light-primary pl-4" },
                                    React.createElement("h3", { className: "text-base font-bold text-gray-900 dark:text-white" }, "Intervenez-vous en parking souterrain \u00E0 Toulouse ?"),
                                    React.createElement("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" }, "Oui, nous disposons de d\u00E9panneuses surbaiss\u00E9es parfaitement adapt\u00E9es pour l'extraction de v\u00E9hicules 4x4, berlines ou motos bloqu\u00E9s dans les parkings souterrains de l'agglom\u00E9ration (limite de hauteur g\u00E9r\u00E9e).")),
                                React.createElement("div", { className: "border-l-4 border-light-primary pl-4" },
                                    React.createElement("h3", { className: "text-base font-bold text-gray-900 dark:text-white" }, "Comment revendre ma voiture accident\u00E9e / mon \u00E9pave ?"),
                                    React.createElement("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" }, "L'estimation se fait par t\u00E9l\u00E9phone ou via l'envoi de photos sur WhatsApp. Nous vous faisons une offre de rachat cash. Si accept\u00E9e, l'enl\u00E8vement de l'\u00E9pave par notre v\u00E9hicule est enti\u00E8rement inclus et nous occupons des papiers (certificat de cession).")),
                                React.createElement("div", { className: "border-l-4 border-light-primary pl-4" },
                                    React.createElement("h3", { className: "text-base font-bold text-gray-900 dark:text-white" }, "Combien de temps avant l'arriv\u00E9e du d\u00E9panneur auto ?"),
                                    React.createElement("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" }, "En cas de situation d'urgence (panne dangereuse, batterie HS, crevaison), notre d\u00E9lai d'intervention est g\u00E9n\u00E9ralement inf\u00E9rieur \u00E0 30 minutes sur Toulouse centre, rocade et Blagnac."))))),
                    React.createElement("div", { className: "order-2" },
                        React.createElement("form", { ref: formRef, onSubmit: handleSubmit, className: "rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8" },
                            React.createElement("h2", { className: "mb-6 text-xl font-bold text-light-text dark:text-dark-text" }, "Formulaire de demande d'assistance"),
                            cooldownTime > 0 && (React.createElement("div", { className: "mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20" },
                                React.createElement("p", { className: "text-blue-800 dark:text-blue-200" },
                                    "Vous pourrez soumettre un nouveau formulaire dans ",
                                    cooldownTime,
                                    " secondes"))),
                            React.createElement("div", { className: "space-y-6" },
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "date", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "Date souhait\u00E9e"),
                                    React.createElement("input", { type: "date", name: "date", id: "date", value: formData.date, onChange: handleChange, className: `mt-2 block w-full rounded-lg border ${errors.date ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled }),
                                    errors.date && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.date))),
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "name", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "Nom complet"),
                                    React.createElement("input", { type: "text", name: "name", id: "name", value: formData.name, onChange: handleChange, className: `mt-2 block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled }),
                                    errors.name && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.name))),
                                React.createElement("div", { className: "grid gap-6 sm:grid-cols-2" },
                                    React.createElement("div", null,
                                        React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "Email"),
                                        React.createElement("input", { type: "email", name: "email", id: "email", value: formData.email, onChange: handleChange, className: `mt-2 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled }),
                                        errors.email && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.email))),
                                    React.createElement("div", null,
                                        React.createElement("label", { htmlFor: "phone", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "T\u00E9l\u00E9phone"),
                                        React.createElement("input", { type: "tel", name: "phone", id: "phone", value: formData.phone, onChange: handleChange, className: `mt-2 block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled }),
                                        errors.phone && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.phone)))),
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "service", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "Type d'intervention"),
                                    React.createElement("select", { name: "service", id: "service", value: formData.service, onChange: handleChange, className: `mt-2 block w-full rounded-lg border ${errors.service ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled },
                                        React.createElement("option", { value: "" }, "S\u00E9lectionnez le type d'intervention"),
                                        Object.entries(serviceOptions).map(([value, label]) => (React.createElement("option", { key: value, value: value }, label)))),
                                    errors.service && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.service))),
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "vehicleModel", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "Mod\u00E8le du v\u00E9hicule"),
                                    React.createElement("input", { type: "text", name: "vehicleModel", id: "vehicleModel", value: formData.vehicleModel, onChange: handleChange, placeholder: "Ex: Renault Clio 4", className: `mt-2 block w-full rounded-lg border ${errors.vehicleModel ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled }),
                                    errors.vehicleModel && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.vehicleModel))),
                                React.createElement("div", null,
                                    React.createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-light-text dark:text-dark-text" }, "D\u00E9tails de votre demande"),
                                    React.createElement("textarea", { name: "message", id: "message", rows: 4, value: formData.message, onChange: handleChange, placeholder: "Indiquez ici votre localisation pr\u00E9cise ou toute information utile...", className: `mt-2 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-light-border dark:border-dark-border'} bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`, required: true, disabled: !isFormEnabled }),
                                    errors.message && (React.createElement("p", { className: "mt-2 text-sm text-red-600 dark:text-red-400" }, errors.message))),
                                React.createElement("button", { type: "submit", disabled: isSubmitting || !isFormEnabled, className: `w-full rounded-lg bg-light-primary px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-light-hover focus:outline-none focus:ring-2 focus:ring-light-primary focus:ring-offset-2 dark:bg-dark-primary dark:hover:bg-dark-hover dark:focus:ring-dark-primary dark:focus:ring-offset-dark-background sm:text-lg ${(isSubmitting || !isFormEnabled) ? 'cursor-not-allowed opacity-70' : ''}` }, isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'),
                                submitStatus === 'success' && (React.createElement("div", { className: "mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900" },
                                    React.createElement("p", { className: "text-green-800 dark:text-green-200 font-bold" }, "Votre message a \u00E9t\u00E9 envoy\u00E9 avec succ\u00E8s. Un d\u00E9panneur va vous recontacter rapidement."))),
                                submitStatus === 'error' && (React.createElement("div", { className: "mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900" },
                                    React.createElement("p", { className: "text-red-800 dark:text-red-200" }, errorMessage || 'Une erreur est survenue lors de l\'envoi. Merci de nous appeler directement.')))))))))));
};
