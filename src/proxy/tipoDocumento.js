
import axios from "axios";


const obtenerListadoDocumentos = () =>{
    return axios.get("http://localhost:9880/api/v1/tipoDocumento/listar");
}

export default {
    obtenerListadoDocumentos
}