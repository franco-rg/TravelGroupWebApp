import axios from "axios";

const ObtenerEmpresas = () => {
    return axios.get("http://localhost:9890/api/v1/empresa/listar");
}

const InsertarEmpresas = (form) => {
    return axios.post("http://localhost:9890/api/v1/empresa/registrar", form, {
        auth: {
            username: 'franco@gmail.com',
            password: '123456'
        }
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerEmpresas,
    InsertarEmpresas
}