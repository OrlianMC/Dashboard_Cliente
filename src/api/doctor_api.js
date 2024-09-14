import axios from 'axios';

export const getDoctor = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getDoctor")
    return axios.get('http://127.0.0.1:8000/doctor/doctores/')
}

export const postDoctor = (doctor) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postDoctor")
    return axios.post('http://127.0.0.1:8000/doctor/doctores/', doctor)
}

export const deleteDoctor = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteDoctor")
    return axios.delete(`http://127.0.0.1:8000/doctor/doctores/${id}/`)
}

export const putDoctor = (doctor, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putDoctor")
    return axios.put(`http://127.0.0.1:8000/doctor/doctores/${id}/`, doctor)
}