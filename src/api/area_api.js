import axios from 'axios';

export const getArea = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getArea")
    return axios.get('http://127.0.0.1:8000/area/areas/')
}

export const postArea = (area) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postArea")
    return axios.post('http://127.0.0.1:8000/area/areas/', area)
}

export const deleteArea = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteArea")
    return axios.delete(`http://127.0.0.1:8000/area/areas/${id}/`)
}

export const putArea = (area, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putArea")
    return axios.put(`http://127.0.0.1:8000/area/areas/${id}/`, area)
}