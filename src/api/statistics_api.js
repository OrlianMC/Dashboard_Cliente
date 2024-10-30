import axios from 'axios';

export const getStatistics = async () => {
    console.log("Método getStatistics");
    try {
        const response = await axios.get('http://127.0.0.1:8000/estadistica/estadisticas/');
        return response;
    } catch (error) {
        console.error("Error en la solicitud de estadísticas:", error);
        throw error;
    }
};