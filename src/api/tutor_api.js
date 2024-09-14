import axios from 'axios';

export const getTutor = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getTutor")
    return axios.get('http://127.0.0.1:8000/tutor/tutores/')
}

export const postTutor = (tutor) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postTutor")
    return axios.post('http://127.0.0.1:8000/tutor/tutores/', tutor)
}

export const deleteTutor = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteTutor")
    return axios.delete(`http://127.0.0.1:8000/tutor/tutores/${id}/`)
}

export const putTutor = (tutor, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putTutor")
    return axios.put(`http://127.0.0.1:8000/tutor/tutores/${id}/`, tutor)
}