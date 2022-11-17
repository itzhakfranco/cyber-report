import React from "react";
import { IPropsTableRow } from "ts/types/components-props.types";
import { TableRowStyle } from "./Table.styled";

const TableRow: React.FC<IPropsTableRow> = ({ children }) => {
	return <TableRowStyle className='table-row'>{children}</TableRowStyle>;
};
export default TableRow;
