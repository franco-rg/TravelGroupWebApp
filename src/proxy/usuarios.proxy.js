import axios from "axios";

const ObtenerUsuarios = () =>{
    return axios.get("http://localhost:9890/api/v1/auth/listar");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerUsuarios
}