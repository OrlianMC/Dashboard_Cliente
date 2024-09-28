import axios from 'axios';

export const getUser = (token) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token.access
        }
    };
    console.log("Metodo getUser")
    return axios.get('http://127.0.0.1:8000/usuario/usuarios/', config)
}

export const postUser = (token, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token.access
        }
    };
    console.log("Metodo postUser")
    return axios.post('http://127.0.0.1:8000/usuario/usuarios/', data, config)
}

export const putUser = (token, data, id) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token.access
        }
    };
    console.log("Metodo putUser")
    console.log(data, id);
    return axios.put(`http://127.0.0.1:8000/usuario/usuarios/${id}/`, data, config)
}

export const deleteUser = (token, id) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token.access
        }
    };
    console.log("Metodo deleteUser")
    return axios.delete(`http://127.0.0.1:8000/usuario/usuarios/${id}/`, config)
}