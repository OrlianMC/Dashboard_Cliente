import axios from 'axios';

export const getCenter = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getCentro")
    return axios.get('http://127.0.0.1:8000/centro/centros/')
}