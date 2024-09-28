import axios from 'axios';

export const postSesion = async (data) => {
    console.log("Metodo postSesion")
    return await axios.post('http://127.0.0.1:8000/sesion/login/', data)
}

// import axios from 'axios';

// export const postSesion = async (formData) => {
//   try {
//     const response = await axios.post('http://localhost:8000/sesion/login/', formData);
//     return response; // Devuelve la respuesta completa
//   } catch (error) {
//     // Lanza el error para que se maneje en el componente
//   }
// };