import axios from 'axios';

export const getProgram = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo getProgram")
    return axios.get('http://127.0.0.1:8000/programa/programas/')
}

export const postProgram = (program) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo postProgram")
    return axios.post('http://127.0.0.1:8000/programa/programas/', program)
}

export const deleteProgram = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo deleteProgram")
    return axios.delete(`http://127.0.0.1:8000/programa/programas/${id}/`)
}

export const putProgram = (program, id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo putProgram")
    return axios.put(`http://127.0.0.1:8000/programa/programas/${id}/`, program)
}