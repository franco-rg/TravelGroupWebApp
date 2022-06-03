import { useState } from 'react';

const useFormInput = () => {
    const [valueText, setValue] = useState('');

    const changeText = (value) => {
        setValue(value)
    }

    return [valueText, changeText];
};

export default useFormInput;