import axios from 'axios';

export const getPerson = () => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo get")
    return axios.get('http://127.0.0.1:8000/persona/personas/')
}

export const postPerson = (person) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo post")
    return axios.post('http://127.0.0.1:8000/persona/personas/', person)
}

export const deletePerson = (id) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo delete")
    return axios.delete('http://127.0.0.1:8000/persona/personas/', id)
}

export const putPerson = (person) => {
    // const config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenAccess
    //     }
    // };
    console.log("Metodo put")
    return axios.put('http://127.0.0.1:8000/persona/personas/', person)
}