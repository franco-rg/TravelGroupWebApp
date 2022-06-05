import { InputNumber } from 'rsuite';
import ErrorMessage from './ErrorMessage';

const InputNumberWithError = ({ value, name, onChange, fieldError, isRequired }) => {
    const handleChangeName = value => {
        onChange(value);
    };

    if (isRequired) {
        return (<>
            <InputNumber value={value} onChange={handleChangeName}
                //max={100} 
                min={0}
                name={name} className={(fieldError ? " form-input-error " : "")} placeholder="0" />
            {fieldError ? <ErrorMessage>{fieldError}</ErrorMessage> : null}
        </>)
    } else {
        return (<>
            <InputNumber
                //max={100} 
                min={0}
                value={value} onChange={handleChangeName} name={name} placeholder="0" />
        </>)
    }
};

export {
    InputNumberWithError,
};