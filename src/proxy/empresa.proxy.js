import axios from "axios";

const ObtenerEmpresas = () => {
    return axios.get("https://agencia0vi.herokuapp.com/api/v1/empresa/listar");
}

const InsertarEmpresas = (form) => {
    return axios.post("https://agencia0vi.herokuapp.com/api/v1/empresa/registrar", form, {
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }, {
        auth: {
            username: 'ejemplo23@gmail.com',
            password: '123456'
        }
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ObtenerEmpresas,
    InsertarEmpresas
}