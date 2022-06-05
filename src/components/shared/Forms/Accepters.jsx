import { forwardRef } from "react";
import { SelectWithError } from "./AccepterTypes/SelectPickerAccepters";
import { InputWithError, TextAreaWithError } from "./AccepterTypes/InputAccepters";
import { DatePickerWithError } from "./AccepterTypes/DatePickerAccepters";
import { InputNumberWithError } from "./AccepterTypes/InputNumberAccepters";

const Accepters = {
	TextInput: forwardRef((props, ref) => <InputWithError {...props} ref={ref} />),
	TextArea: forwardRef((props, ref) => <TextAreaWithError {...props} ref={ref} />),
	SelectPicker: forwardRef((props, ref) => <SelectWithError {...props} ref={ref} />),
	DatePicker: forwardRef((props, ref) => <DatePickerWithError {...props} ref={ref} />),
	Number: forwardRef((props, ref) => <InputNumberWithError {...props} ref={ref} />),
};

export default Accepters;