import axios from 'axios';

const login = (dataLogin) =>{
    return axios.post("http://localhost:9890/api/v1/auth/iniciarSesion", dataLogin);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}