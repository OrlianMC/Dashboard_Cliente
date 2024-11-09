import axios from 'axios';

export const postSesion = async (data) => {
    console.log("Metodo postSesion")
    return await axios.post('http://127.0.0.1:8000/sesion/login/', data)
}

export const postSesionLogout = (token) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token.access
        }
    };
    console.log("Metodo postSesionLogout")
    return axios.post('http://127.0.0.1:8000/sesion/logout/', {}, config)
}