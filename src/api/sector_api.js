import axios from 'axios';

export const getSector = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getSector")
    return axios.get('http://127.0.0.1:8000/sectorest/sectores/')
}

export const postSector = (sector) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postSector")
    return axios.post('http://127.0.0.1:8000/persona/personas/', sector)
}

export const deleteSector = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteSector")
    return axios.delete(`http://127.0.0.1:8000/persona/personas/${id}/`)
}

export const putSector = (sector, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putSector")
    return axios.put(`http://127.0.0.1:8000/persona/personas/${id}/`, sector)
}