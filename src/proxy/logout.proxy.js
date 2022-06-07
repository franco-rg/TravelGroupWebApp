import axios from 'axios';

const logout = () =>{
    return axios.get("http://localhost:9890/logout");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logout
}