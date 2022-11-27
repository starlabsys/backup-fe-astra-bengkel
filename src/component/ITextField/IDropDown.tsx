import { useEffect, useState } from "react";
import { InterfaceDropDown } from "./interface/InterfaceDropDown";

export interface InterfacePropsDropDown {
	id: number;
	name: string;
	value: string;
}

const IDropDown = (props: InterfaceDropDown) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<string | undefined>(undefined);

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
					onClick={() => {
						setValue(undefined);
					}}
					value={value}
					className={`focus:outline-none bg-white w-full placeholder:text-sm bg-transparent`}
					placeholder={props.placeholder}
					onChange={(value) => {
						if (value.target.value === "") {
							setValue(undefined);
							setOpen(false);
						} else {
							setOpen(true);
						}
						props.onValueChange(value.target.value);
					}}
					disabled={props.disabled}
				/>
			</div>
			<div
				className={`absolute flex top-0 left-4 transform -translate-x-1 -translate-y-1/2`}
			>
				<label
					className={`${
						props.error ? "text-danger" : props.labelColor ?? "text-primary"
					} ${props.backgroundLabel ?? "bg-white"} 
            text-primary px-1  text-sm`}
				>
					{props.label}
				</label>
			</div>
			{open ? (
				<div
					className={`absolute top-12 bg-white max-h-48 rounded-b-lg z-20 w-full overflow-auto grid shadow-md`}
				>
					{props.data.map((data, index) => {
						return (
							<div
								key={index}
								onClick={() => {
									setOpen(false);
									setValue(data.value);
									return props.onValue(data.value);
								}}
								className={`w-full hover:bg-primary px-3 py-3 hover:text-white cursor-pointer`}
							>
								{data.name}
							</div>
						);
					})}
					{props.activeAddOn ? (
						<div
							className="p-2 bg-primary text-white text-center mt-2 cursor-pointer"
							onClick={props.onClickAddOn}
						>
							Tambah
						</div>
					) : null}
				</div>
			) : null}
		</div>
	);
};
export default IDropDown;
