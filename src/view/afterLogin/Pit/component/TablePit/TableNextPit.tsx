import { Pagination, Table, useAsyncList } from "@nextui-org/react";
import { InterfacePit } from "../../interface/InterfacePit";
import {
	MdModeEditOutline,
	MdInfo,
	MdDelete,
	MdKeyboardArrowDown
} from "react-icons/md";
import { bodyLabel2 } from "../../../../../component/styles/Style";

interface Interface {
	updated: (data: InterfacePit) => void;
	controller: { pit: InterfacePit[]; loading: boolean };
	totalPage: number;
	totalRow: number;
	page: number;
	changePage?: ((page: number) => void) | undefined;
}

export default function ITablePit(props: Interface) {
	return (
		<>
			<Table
				lined
				headerLined
				shadow={false}
				bordered={true}
				border={0}
				selectionMode={"single"}
				aria-label="Example static collection table"
				css={{
					height: "auto",
					minWidth: "100%"
				}}
			>
				<Table.Header>
					<Table.Column>#</Table.Column>
					<Table.Column>Kode PIT</Table.Column>
					<Table.Column>Tipe PIT</Table.Column>
					<Table.Column>Status</Table.Column>
					<Table.Column>Action</Table.Column>
				</Table.Header>
				<Table.Body
					loadingState={props.controller.loading ? "loading" : "filtering"}
				>
					{props.controller.pit.map((data, index) => {
						return (
							<Table.Row key={index} textValue={"a"}>
								<Table.Cell>{index + 1 + props.page * 10}</Table.Cell>
								<Table.Cell>{data.kode_pit}</Table.Cell>
								<Table.Cell>{data.tipe_pit}</Table.Cell>
								<Table.Cell>
									<div
										className={`w-fit rounded-lg grid px-5 py-1 text-white ${bodyLabel2} ${
											data.is_active ? "bg-success" : "bg-warning"
										}`}
									>
										{data.is_active ? "Aktif" : "Tidak Aktif"}
									</div>
								</Table.Cell>
								<Table.Cell>
									<div className="flex gap-3">
										<MdInfo
											size={25}
											color={"#0E90FF"}
											className={`cursor-pointer`}
											onClick={() => {
												// props.updated(item);
											}}
										/>
										<MdModeEditOutline
											size={25}
											color={"#F0B900"}
											className={`cursor-pointer`}
											onClick={() => {
												// props.updated(item);
											}}
										/>
									</div>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
			<Pagination total={props.totalPage} onChange={props.changePage} />
		</>
	);
}
