import { useState } from "react";

const useDatePicker = () => {
	const [date, setDate] = useState(null);

	const pickDate = (date) => {
		setDate(date);
	};

	return [date, pickDate];
};

export default useDatePicker; 