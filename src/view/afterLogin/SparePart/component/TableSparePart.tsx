import {
	MdModeEditOutline,
	MdInfo,
	MdDelete,
	MdKeyboardArrowDown
} from "react-icons/md";
import ISizeBox from "../../../../component/ISizeBox/ISizeBox";
import SparePartController from "../IndexView/SparePartController";
import { useState } from "react";
import ISpinLoading from "../../../../component/animation/ISpinLoading/ISpinLoading";

interface Interface {
	deleted?: () => void;
	updated?: () => void;
	info?: () => void;
}

const TableSparePart = (props: Interface) => {
	const controller = SparePartController();
	const [state, setState] = useState(1);
	const [start, setStart] = useState(0);

	const length = controller.sparepart.length / 10;
	const pagination = [];

	const dataTable = controller.sparepart.filter((value, index, array) => {
		console.log(state === 1 ? index < start : start < start * state);
		if (state === 1) {
			return index < 10;
		} else {
			// console.log( '2 ' + (start < (start * state)) )
			// const dataStart = (start * state) - 10
			// const dataMax = start * state
			// console.log( 'dataStart ' + dataStart + '||' + dataMax )
			return index >= 10 && index < 20;
		}
		// return state === 1 ? () : (start < start * state)
	});

	if (length <= 5) {
		for (let i = 0; i < length; i++) {
			pagination.push(
				<div
					key={i}
					className={`w-10 h-10 flex place-content-center 
                                place-items-center rounded-lg border border-primary hover:bg-primary hover:text-white
                                cursor-pointer ${
																	i + 1 === state ? "bg-primary text-white" : ""
																}`}
					onClick={() => {
						setState(i + 1);
					}}
				>
					{i + 1}
				</div>
			);
		}
	}

	return controller.loading ? (
		<div className={`w-full flex place-items-center place-content-center`}>
			<ISpinLoading />
		</div>
	) : (
		<div className={`overflow-auto py-5`}>
			<div className={`px-5`}>
				<div
					className={`border border-primary w-16 py-3 flex place-items-center place-content-center rounded-lg cursor-pointer`}
				>
					<div>1</div>
					<MdKeyboardArrowDown size={20} />
				</div>
			</div>
			<ISizeBox height={"h-5"} />
			<table className={`w-full`}>
				<thead className={`bg-primary text-white`}>
					<tr>
						<th className={`px-3 py-5 text-center`}>No</th>
						<th className={`px-3 py-5 text-center`}>Kode</th>
						<th className={`px-3 py-5 text-center`}>Nama</th>
						<th className={`px-3 py-5 text-center`}>Group</th>
						<th className={`px-3 py-5 text-center`}>Harga Ahass</th>
						<th className={`px-3 py-5 text-center`}>Harga Nasional (HET)</th>
						<th className={`px-3 py-5 text-center`}>Action</th>
					</tr>
				</thead>
				<tbody>
					{dataTable.map((item, index) => {
						return (
							<tr
								key={index}
								className={`${
									index % 2 == 0 ? "bg-white-secondary4" : "bg-white"
								}`}
							>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
								>
									{index + 1 + start}
								</td>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
								>
									{item.code}
								</td>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
								>
									{item.name}
								</td>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
								>
									{item.group}
								</td>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
								>
									{item.price}
								</td>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
								>
									{item.priceNasional}
								</td>
								<td
									className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px] flex gap-2 place-items-center place-content-center`}
								>
									<MdInfo
										size={25}
										color={"#20A8D8"}
										className={`cursor-pointer`}
										onClick={props.info}
									/>
									<MdModeEditOutline
										size={25}
										color={"#F0B900"}
										className={`cursor-pointer`}
										onClick={props.updated}
									/>
									<MdDelete
										size={25}
										color={"#E21B1B"}
										className={`cursor-pointer`}
										onClick={props.deleted}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<hr />
			<div className={`mt-5 px-5 flex gap-2 place-content-end`}>
				<div
					className={`w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white`}
					onClick={() => {
						if (state > 1) {
							setState(state - 1);
						}
					}}
				>
					Prev
				</div>
				{
					pagination
					// controller.sparepart.map( ( data, index ) => {
					//     return (index++) ?  : null
					// } )
				}
				<div
					className={`w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white`}
					onClick={() => {
						setState(state + 1);
						setStart(start + 10);
					}}
				>
					Next
				</div>
			</div>
		</div>
	);
};
export default TableSparePart;
