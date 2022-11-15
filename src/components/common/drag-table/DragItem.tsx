import React from "react";
import { IPropsDragItem } from "ts/interfaces/Report.interface";
import { DragItemStyled } from "./DragTable.styled";

const DragItem: React.FC<IPropsDragItem> = ({
	taskName,
	taskDescription,
	id,
	taskId,
}) => {
	return (
		<DragItemStyled>
			<div className='line-1'>
				<span className='task-name'>{taskName}</span>
				<span className='indicator'></span>
				<span className='id'>{id}</span>
			</div>
			<div className='line-2'>
				<span className='task-sec'>{taskDescription}</span>
				<span className='indicator'></span>
				<span className='task-id'>{taskId}</span>
			</div>
		</DragItemStyled>
	);
};

export default DragItem;
