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