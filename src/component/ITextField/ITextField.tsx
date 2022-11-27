import {
	InterfaceTextFieldDefault,
	InterfaceTextFieldRounded
} from "./interface/InterfaceTextFormField";
import { label3 } from "../styles/Style";

export const ITextFieldRounded = (props: InterfaceTextFieldRounded) => {
	return (
		<input
			className={`focus:outline-none border border-secondary2 rounded-full py-2.5 px-5`}
			enterKeyHint={props.onEnter}
			type={props.type}
			required={props.required}
			autoComplete={props.autoComplete}
			hidden={props.hidden}
			name={props.name}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
};

export const ITextFieldDefault = (props: InterfaceTextFieldDefault) => {
	return (
		<div className={`relative rounded-md w-full`}>
			<div
				className={`w-full border ${
					props.error ? "border-danger" : "border-primary"
				} rounded-md gap-2 pt-2.5 pb-2 px-3 flex`}
			>
				<input
					type={props.type}
					name={props.name}
					enterKeyHint={props.onEnter}
					required={props.required}
					className={`focus:outline-none bg-white w-full placeholder:text-sm bg-transparent`}
					placeholder={props.placeholder ?? ""}
					onChange={props.onChange}
					disabled={props.disabled}
				/>
			</div>
			<div
				className={`absolute flex top-0 left-4 transform -translate-x-1 -translate-y-1/2`}
			>
				<label
					className={`${props.backgroundLabel ?? "bg-white"} 
            px-1 ${
							props.error ? "text-danger" : props.labelColor ?? "text-primary"
						} text-sm`}
				>
					{props.label}
				</label>
			</div>
			{props.errorMessages !== undefined ? (
				<div className={`${label3} mt-1 text-danger`}>
					{props.errorMessages}
				</div>
			) : null}
		</div>
	);
};
