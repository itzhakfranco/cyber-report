import React from "react";

import { IPropsTableBodyCell } from "ts/types/report.types";
import { TableBodyCellStyle } from "./Table.styled";

const TableBodyCell: React.FC<IPropsTableBodyCell> = ({ children }) => {
	return (
		<TableBodyCellStyle className='table-body-cell'>
			{children}
		</TableBodyCellStyle>
	);
};

export default TableBodyCell;
