import React from "react";
import { IPropsTableBody } from "ts/interfaces/Report.interface";
import { TableBodyStyle } from "./Table.styled";

const TableBody: React.FC<IPropsTableBody> = ({ children }) => {
	return <TableBodyStyle className='table-body'>{children}</TableBodyStyle>;
};

export default TableBody;
