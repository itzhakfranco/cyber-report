import React from "react";
import { IPropsTableHead } from "ts/types/components-props.types";
import { TableHeadStyle } from "./Table.styled";

const TableHead: React.FC<IPropsTableHead> = ({ children }) => {
	return <TableHeadStyle className='table-head'>{children}</TableHeadStyle>;
};

export default TableHead;
