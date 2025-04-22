import { useState, useEffect } from 'react';
export const useGeolocation = () => {
    const [state, setState] = useState({
        latitude: null,
        longitude: null,
        error: null,
        loading: true,
    });
    useEffect(() => {
        if (!navigator.geolocation) {
            setState((prev) => ({
                ...prev,
                error: "La géolocalisation n'est pas supportée par votre navigateur",
                loading: false,
            }));
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
                loading: false,
            });
        }, (error) => {
            setState({
                latitude: null,
                longitude: null,
                error: error.message,
                loading: false,
            });
        });
    }, []);
    return state;
};
