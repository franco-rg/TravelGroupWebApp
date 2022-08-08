const FormatoFecha = (datestring) => {
    //12/11/2021 09:42:58
    let date = new Date(datestring)
    let day = (date.getDate() + '').padStart(2, "0")
    let month = ((date.getMonth() + 1) + '').padStart(2, "0")
    let year = (date.getFullYear() + '').padStart(2, "0")
    let hour = (date.getHours() + '').padStart(2, "0")
    let minutes = (date.getMinutes() + '').padStart(2, "0")
    let seconds = (date.getSeconds() + '').padStart(2, "0")
    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}

const DateOnly = (datetimestring) => {
    if (datetimestring === "0001-01-01T00:00:00") 
        return "SIN REGISTRO";
    let date = new Date(datetimestring);
    let day = (date.getDate() + '').padStart(2, "0");
    let month = ((date.getMonth() + 1) + '').padStart(2, "0");
    let year = (date.getFullYear() + '').padStart(4, "0");
    return `${day}/${month}/${year}`;
}

export default {
    FormatoFecha,
    DateOnly
}