import axios from 'axios';

const login = (dataLogin) =>{
    return axios.post("https://agencia0vi.herokuapp.com/api/v1/auth/iniciarSesion", dataLogin);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}