import axios from 'axios';

export const getDoctoral_student = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getDoctoral_student")
    return axios.get('http://127.0.0.1:8000/doctorando/doctorandos/')
}

export const postDoctoral_student = (doctoral_student) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postDoctoral_student")
    return axios.post('http://127.0.0.1:8000/doctorando/doctorandos/', doctoral_student)
}

export const deleteDoctoral_student = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteDoctoral_student")
    return axios.delete(`http://127.0.0.1:8000/doctorando/doctorandos/${id}/`)
}

export const putDoctoral_student = (doctoral_student, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putDoctoral_student")
    return axios.put(`http://127.0.0.1:8000/doctorando/doctorandos/${id}/`, doctoral_student)
}