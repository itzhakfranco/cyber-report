import React from "react";
import { IPropsTable } from "ts/types/components-props.types";
import { TableStyle } from "./Table.styled";

const Table: React.FC<IPropsTable> = ({ children }) => {
	return <TableStyle>{children}</TableStyle>;
};

export default Table;
