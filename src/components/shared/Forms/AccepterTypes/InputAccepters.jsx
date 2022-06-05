import { Input, InputNumber } from 'rsuite';
import ErrorMessage from './ErrorMessage';

const InputWithError = ({ value = "", name, onChange, onBlur, fieldError, isRequired, disabled, readOnly}) => {
	const handleChangeName = value => (/^[a-zA-ZÀ-ÿ0-9.,\s]*$/.test(value)) && onChange(value.toUpperCase());
	const handleBlur = value => {
		onChange(value.currentTarget.value.toUpperCase());
		onBlur(value.currentTarget.value.toUpperCase());
	};

	if (isRequired) {
		return (<>
			<Input as="input" className={"uppercase " + (fieldError ? " form-input-error " : "")} name={name} value={value} onBlur={handleBlur} onChange={handleChangeName} disabled={disabled} readOnly={readOnly} />
			{fieldError ? <ErrorMessage>{fieldError}</ErrorMessage> : null}
		</>)
	} else {
		return (<>
			<Input as="input" className="uppercase " name={name} value={value} onChange={handleChangeName} disabled={disabled} readOnly={readOnly} />
		</>)
	}
};

const TextAreaWithError = ({ value = "", name, onChange, onBlur, fieldError, isRequired, disabled, readOnly }) => {
	const handleChangeName = value => (/^[a-zA-ZÀ-ÿ0-9.,\s]*$/.test(value)) && onChange(value.toUpperCase());
	const handleBlur = value => {
		onChange(value.currentTarget.value.toUpperCase());
		onBlur(value.currentTarget.value.toUpperCase());
	};
	if (isRequired) {
		return (<>
			<Input as="textarea" className={"uppercase " + (fieldError ? " form-input-error " : "")} name={name} value={value} onBlur={handleBlur} onChange={handleChangeName} disabled={disabled} readOnly={readOnly} />
			{fieldError ? <ErrorMessage>{fieldError}</ErrorMessage> : null}
		</>)
	} else {
		return (<>
			<Input as="textarea" className="uppercase " name={name} value={value} onChange={handleChangeName} disabled={disabled} readOnly={readOnly} />
		</>)
	}
}

export {
	InputWithError,
	TextAreaWithError,
};