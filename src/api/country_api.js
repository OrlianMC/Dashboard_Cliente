import axios from 'axios';

export const getCountry = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getCountry")
    return axios.get('http://127.0.0.1:8000/pais/paises/')
}

export const postCountry = (country) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postCountry")
    return axios.post('http://127.0.0.1:8000/pais/paises/', country)
}

export const deleteCountry = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteCountry")
    return axios.delete(`http://127.0.0.1:8000/pais/paises/${id}/`)
}

export const putCountry = (country, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putCountry")
    return axios.put(`http://127.0.0.1:8000/pais/paises/${id}/`, country)
}