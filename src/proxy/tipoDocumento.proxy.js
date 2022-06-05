import axios from "axios";


const obtenerListadoDocumentos = () =>{
    return axios.get("http://localhost:9890/api/v1/tipoDocumento/listar");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    obtenerListadoDocumentos
}