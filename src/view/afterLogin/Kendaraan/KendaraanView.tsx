import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IButton from "../../../component/IButton/IButton";
import TableKendaraan from "./component/TableKendaraan";
import KendaraanController from "./controller/KendaraanController";

const KendaraanView = () => {
	const controller = KendaraanController();
	return (
		<div className={`flex-1 grid gap-5`}>
			<IBreadcrumbs title={"Kendaraan"} subtitle={"kendaraan"} />
			<div className={`w-full rounded-lg bg-white grid relative`}>
				<div className={`w-full p-5 grid gap-10`}>
					<ITitleMd title={"List Kendaraan"} />
					<div
						className={`laptop:flex place-items-center place-content-between mb-5`}
					>
						<div className={`laptop:w-4/12 mb-5 laptop:mb-0`}>
							<ITextFieldDefault
								type={"text"}
								onChange={(event) => {
									controller.setSearch(event.target.value);
								}}
								placeholder={"Cari..."}
								label={"Cari"}
								onEnter={"enter"}
							/>
						</div>
						<div className={`flex place-content-end `}>
							<IButton size={"small"} rounded={"lg"} status={"success"}>
								+ Tambah Kendaraan
							</IButton>
						</div>
					</div>
				</div>
				<TableKendaraan search={controller.search} />
			</div>
		</div>
	);
};
export default KendaraanView;
