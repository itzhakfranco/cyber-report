import React from "react";
import { IPropsDragTableColumn } from "ts/interfaces/Report.interface";
import { DragTableColumnStyled } from "./DragTable.styled";

const DragTableColumn: React.FC<IPropsDragTableColumn> = ({
	children,
	colName,
}) => {
	return (
		<DragTableColumnStyled>
			<div className='col-head'>{colName}</div>
			<div className='col-body'>{children}</div>
		</DragTableColumnStyled>
	);
};

export default DragTableColumn;
