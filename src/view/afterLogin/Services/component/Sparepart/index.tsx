import ITitleMd from "../../../../../component/ITitle/ITitleMd";
import IButton from "../../../../../component/IButton/IButton";
import { Header1 } from "../../../../../component/styles/Style";
import TableSparepartServices from "./component/TableJasaServices";

const SparepartComponentView = () => {
	return (
		<div className={`flex-1 grid gap-5 bg-white rounded-lg p-5`}>
			<ITitleMd title={"Sparepart"} />
			<div className={`grid gap-5 flex-1 place-content-end`}>
				<div className="grid tablet:flex tablet:place-content-end">
					<IButton size={"small"} rounded={"full"} status={"success"}>
						+ Tambah Sparepart
					</IButton>
				</div>
				<TableSparepartServices />
			</div>
			<div className="grid gap-10 tablet:flex mt-10">
				<div className="grid flex-1 place-items-center place-content-center gap-2">
					<ITitleMd title={"Total Qty"} />
					<div className={`${Header1} text-primary`}>0</div>
				</div>
				<div className="grid flex-1 place-items-center place-content-center gap-2">
					<ITitleMd title={"Part Gratis"} />
					<div className={`${Header1} text-primary`}>Rp. 0.00</div>
				</div>
				<div className="grid flex-1 place-items-center place-content-center gap-2">
					<ITitleMd title={"Part Bayar"} />
					<div className={`${Header1} text-primary`}>Rp. 0.00</div>
				</div>
			</div>
		</div>
	);
};
export default SparepartComponentView;
