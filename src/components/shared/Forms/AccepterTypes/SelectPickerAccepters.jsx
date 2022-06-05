import { SelectPicker } from 'rsuite';
import ErrorMessage from './ErrorMessage';

const SelectWithError = ({ data = "", value = "", disabled, name, onChange, fieldError, isRequired, searchable, readOnly }) => {
	const handleChangeName = (value) => {
		onChange(value);
	};

	if (isRequired) {
		return (<>
			<SelectPicker placeholder="Seleccione" disabled={disabled} locale={{searchPlaceholder: "Buscar", noResultsText: "No hay resultados"}} value={value} name={name} data={data} className={(fieldError ? " form-input-error " : "")} searchable={searchable} onChange={handleChangeName} readOnly={readOnly} />
			{fieldError ? <ErrorMessage>{fieldError}</ErrorMessage> : null}
		</>)
	} else {
		return (<>
			<SelectPicker placeholder="Seleccione" disabled={disabled} locale={{searchPlaceholder: "Buscar", noResultsText: "No hay resultados"}} value={value} name={name} data={data} searchable={searchable} onChange={handleChangeName} readOnly={readOnly} />
		</>)
	}
}

export {
	SelectWithError
};