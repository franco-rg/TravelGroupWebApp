import { Form } from "rsuite";

export function FormControlCustom({
	placeholder = "0", className, label, name = "", value = "", searchable = false, data = [], onChange = () => { }, onBlur = () => { }, error, isRequired, readOnly = false, accepter, disabled = false, disabledDate=false
}) {

	const onChangeHandler = value => {
		onChange(value);
	};
	const onBlurHandler = value => {
		onBlur(value);
	};

	return (
		<Form.Group className={className}>
			{isRequired ? (
				<div className="col-span-12">
					<Form.ControlLabel>{label}<span className="ml-3 text-red-600">*</span></Form.ControlLabel>
				</div>
			) : (
				<div className="col-span-12">
					<Form.ControlLabel>{label}</Form.ControlLabel>
				</div>
			)}
			<Form.Control
				className={readOnly ? "w-full pointer-events-none" : "w-full"}
				name={name}
				value={value}
				placeholder={placeholder}
				data={data}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				searchable={searchable}
				accepter={accepter}
				fieldError={error}
				errorMessage=""
				isRequired={isRequired}
				disabled={disabled}
				readOnly={readOnly}
				disabledDate={disabledDate} />
		</Form.Group>

	);
}

export default FormControlCustom;