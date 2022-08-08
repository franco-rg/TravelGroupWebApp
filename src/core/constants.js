
const ENTORNOS = {
    desarrollo: "Development",
    pruebas: "Staging",
    produccion: "Production"
}


/* AL MOMENTO DE DESPLEGAR CAMBIAR AQUI*/
/* RECORDAR CAMBIAR EL package.json homepage: "/pcl-web" */
/* Y DESCOMENTAR EN EL program.cs los "useStaticFiles" */
const CARPETA_DESPLIEGUE = ''//'/pcl-web';
const ENTORNO_DESPLIEGUE = ENTORNOS.desarrollo;
/* */

const ID_MODULO = '6'

export default {
    ENTORNO_DESPLIEGUE,
    CARPETA_DESPLIEGUE,
    ID_MODULO
}