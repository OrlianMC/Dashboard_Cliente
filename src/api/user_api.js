import axios from 'axios';

export const getUser = (tokenAccess) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    console.log("Metodo getUser")
    return axios.get('http://127.0.0.1:8000/usuario/usuarios/', config)
}

export const postUser = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    console.log("Metodo postUser")
    return axios.post('http://127.0.0.1:8000/usuario/usuarios/', data, config)
}

export const putUser = (tokenAccess, data, id) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    console.log("Metodo putUser")
    console.log(data, id);
    return axios.put(`http://127.0.0.1:8000/usuario/usuarios/${id}/`, data, config)
}

export const deleteUser = (tokenAccess, id) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    console.log("Metodo deleteUser")
    return axios.delete(`http://127.0.0.1:8000/usuario/usuarios/${id}/`, config)
}