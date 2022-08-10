import axios from "axios";


const obtenerListadoDocumentos = () =>{
    return axios.get("https://agencia0vi.herokuapp.com/api/v1/tipoDocumento/listar");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    obtenerListadoDocumentos
}