import React from "react";
import { IPropsTableBody } from "ts/types/components-props.types";
import { TableBodyStyle } from "./Table.styled";

const TableBody: React.FC<IPropsTableBody> = ({ children }) => {
	return <TableBodyStyle className='table-body'>{children}</TableBodyStyle>;
};

export default TableBody;
