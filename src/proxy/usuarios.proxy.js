import axios from "axios";

const ObtenerUsuarios = () =>{
    return axios.get("https://agencia0vi.herokuapp.com/api/v1/auth/listar");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerUsuarios
}