import React from "react";
import { IPropsTableHeadCell } from "ts/types/components-props.types";
import { TableHeadCellStyle } from "./Table.styled";

const TableHeadCell: React.FC<IPropsTableHeadCell> = ({ children }) => {
	return (
		<TableHeadCellStyle className='table-head-cell'>
			{children}
		</TableHeadCellStyle>
	);
};

export default TableHeadCell;
