import React from "react";
import { IPropsTable } from "ts/interfaces/Report.interface";
import { TableStyle } from "./Table.styled";

const Table: React.FC<IPropsTable> = ({ children }) => {
	return <TableStyle>{children}</TableStyle>;
};

export default Table;
