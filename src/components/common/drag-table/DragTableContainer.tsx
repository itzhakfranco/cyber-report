import React from "react";
import { IPropsDragTableContainer } from "ts/types/components-props.types";
import { DragTableContainerStyled } from "./DragTable.styled";

const DragTableContainer: React.FC<IPropsDragTableContainer> = ({
	children,
}) => {
	return <DragTableContainerStyled>{children}</DragTableContainerStyled>;
};

export default DragTableContainer;
