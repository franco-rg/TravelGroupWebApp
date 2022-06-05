import axios from "axios";

const ObtenerRoles = () =>{
    return axios.get("http://localhost:9890/api/v1/rol/listar");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerRoles
}