import { useState } from 'react';

const useFormSelect = () => {
    const [values, setValues] = useState([]);

    const changeSelect = (values) => {
        setValues(values)
    }

    return [values, changeSelect];
};

export default useFormSelect;