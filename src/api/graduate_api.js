import axios from 'axios';

export const getGraduate = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getGraduate")
    return axios.get('http://127.0.0.1:8000/graduado/graduados/')
}

export const postGraduate = (graduate) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postGraduate")
    return axios.post('http://127.0.0.1:8000/graduado/graduados/', graduate)
}

export const deleteGraduate = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteGraduate")
    return axios.delete(`http://127.0.0.1:8000/graduado/graduados/${id}/`)
}

export const putGraduate = (graduate, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putGraduate")
    return axios.put(`http://127.0.0.1:8000/graduado/graduados/${id}/`, graduate)
}