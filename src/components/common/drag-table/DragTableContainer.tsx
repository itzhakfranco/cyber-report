import React from "react";
import { IPropsDragTableContainer } from "ts/interfaces/Report.interface";
import { DragTableContainerStyled } from "./DragTable.styled";

const DragTableContainer: React.FC<IPropsDragTableContainer> = ({
	children,
}) => {
	return <DragTableContainerStyled>{children}</DragTableContainerStyled>;
};

export default DragTableContainer;
