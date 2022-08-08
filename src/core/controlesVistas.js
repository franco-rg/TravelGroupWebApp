
const NombreVistas = {
    vistaHome: "PERSONA"
}

const NombreControles = {
    vistaHomeVer: "AGRGRPRSNA",
    vistaHomeVer2: "verHome2",
    vistaHomeVer3: "verHome3"
}
const ControlesVistas = [
    {
        vista: NombreVistas.vistaHome,
        controles: [
            NombreControles.vistaHomeVer,//nombre descriptivo           
            NombreControles.vistaHomeVer2,//nombre descriptivo
            NombreControles.vistaHomeVer3,//nombre descriptivo
        ]
    },
]

export default {
    ControlesVistas,
    NombreControles,
    NombreVistas
}