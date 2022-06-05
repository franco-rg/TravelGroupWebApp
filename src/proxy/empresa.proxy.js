import axios from "axios";

const ObtenerEmpresas = () =>{
    return axios.get("http://localhost:9890/api/v1/empresa/listar");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerEmpresas
}