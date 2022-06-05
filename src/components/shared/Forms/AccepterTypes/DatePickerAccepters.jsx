import ErrorMessage from './ErrorMessage';
import { DatePicker, DateRangePicker } from 'rsuite';

const  { beforeToday } = DateRangePicker;

const DatePickerWithError = ({ value= null, name, onChange, fieldError, isRequired, format="dd-MM-yyyy", disabled, readOnly, disabledDate=false }) => {
	if (isRequired) {
		return (<>
			<DatePicker disabledDate={ disabledDate ? beforeToday() : null} oneTap className={(fieldError ? " form-input-error " : "")} name={name} value={typeof(value) === 'string' ? null : value} format={format} onChange={onChange} disabled={disabled} readOnly={readOnly} />
			{fieldError ? <ErrorMessage>{fieldError}</ErrorMessage> : null}
		</>)
	} else {
		return (<>
			<DatePicker className={(fieldError ? " form-input-error " : "")} name={name} value={typeof(value) === 'string' ? null : value} format={format} onChange={onChange} disabled={disabled} readOnly={readOnly} />
		</>)
	}
};

export {
	DatePickerWithError,
};