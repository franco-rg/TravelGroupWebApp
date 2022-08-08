// Asigna un valor a un select con un GrupoDato, el array
// de datos que contiene y la funcion setSelectedValue
const SetSelectGD = (GrupoDato, SelectData) => {
	const selectedElem = SelectData.filter(data => data.label == GrupoDato)[0];
	const selectedValue = typeof(selectedElem) != 'undefined' ? selectedElem['value'] : '';  
	return selectedValue;
};

export default SetSelectGD;