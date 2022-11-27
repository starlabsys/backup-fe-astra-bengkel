import { MdInfo, MdModeEditOutline, MdDelete } from "react-icons/md";
import ITable from "../../../../../../../component/ITable/ITable";

const TableJasaServices = () => {
	const data: any[] = [{}, {}, {}];
	return (
		<div className={`overflow-auto min-h-[200px] scrollbar-hide`}>
			<ITable
				loading={false}
				header={[
					"No",
					"Kode Jasa",
					"Kode Jasa AHM",
					"Nama Pekerjaan",
					"Harga Pekerjaan",
					"Tambahan Harga",
					"Nilai Diskon",
					"Persentase Diskon",
					"Is OPL",
					"Total",
					"Action"
				]}
			>
				{data.map((data, index) => {
					return (
						<tr
							key={index}
							className={`${
								index % 2 === 0 ? "bg-white-secondary4" : "bg-white"
							}`}
						>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								1
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.noPolisi
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.noMesin
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.noRangka
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.customer
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.type
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.warna
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.tahunRakit
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.status
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px]`}
							>
								data.status
							</td>
							<td
								className={`px-3 py-4 text-center whitespace-nowrap min-w-[60px] flex gap-2 place-items-center place-content-center`}
							>
								<MdInfo
									size={25}
									color={"#20A8D8"}
									className={`cursor-pointer`}
									onClick={() => {}}
								/>
								<MdModeEditOutline
									size={25}
									color={"#F0B900"}
									className={`cursor-pointer`}
									onClick={() => {}}
								/>
								<MdDelete
									size={25}
									color={"#E21B1B"}
									className={`cursor-pointer`}
									onClick={() => {}}
								/>
							</td>
						</tr>
					);
				})}
			</ITable>
		</div>
	);
};

export default TableJasaServices;
