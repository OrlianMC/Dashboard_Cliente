import axios from 'axios';

export const getCenter = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getCenter")
    return axios.get('http://127.0.0.1:8000/centro/centros/')
}

export const postCenter = (center) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postCenter")
    return axios.post('http://127.0.0.1:8000/centro/centros/', center)
}

export const deleteCenter = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteCenter")
    return axios.delete(`http://127.0.0.1:8000/centro/centros/${id}/`)
}

export const putCenter = (center, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putCenter")
    return axios.put(`http://127.0.0.1:8000/centro/centros/${id}/`, center)
}