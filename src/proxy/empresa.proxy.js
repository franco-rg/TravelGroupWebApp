import axios from "axios";

const ObtenerEmpresas = () => {
    return axios.get("https://agencia0vi.herokuapp.com/api/v1/empresa/listar");
}

const InsertarEmpresas = (form) => {
    return axios.post("https://agencia0vi.herokuapp.com/api/v1/empresa/registrar", form);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerEmpresas,
    InsertarEmpresas
}