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