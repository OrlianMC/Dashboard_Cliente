import axios from 'axios';

export const getCountry = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getPais")
    return axios.get('http://127.0.0.1:8000/pais/paises/')
}