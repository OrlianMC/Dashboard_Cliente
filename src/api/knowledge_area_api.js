import axios from 'axios';

export const getKnowledge_area = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getKnowledge_area")
    return axios.get('http://127.0.0.1:8000/areadeconocimiento/areadeconocimientos/')
}

export const postKnowledge_area = (knowledge_area) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postKnowledge_area")
    return axios.post('http://127.0.0.1:8000/areadeconocimiento/areadeconocimientos/', knowledge_area)
}

export const deleteKnowledge_area = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteKnowledge_area")
    return axios.delete(`http://127.0.0.1:8000/areadeconocimiento/areadeconocimientos/${id}/`)
}

export const putKnowledge_area = (knowledge_area, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putKnowledge_area")
    return axios.put(`http://127.0.0.1:8000/areadeconocimiento/areadeconocimientos/${id}/`, knowledge_area)
}