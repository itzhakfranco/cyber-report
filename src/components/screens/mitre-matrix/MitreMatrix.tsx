import React from "react";
import useMitreMatrix from "hooks/useMitreMatrix";
import { Status } from "ts/enums/Report.enum";
import { MitreMatrixStyled } from "./MitreMatrix.styled";
import ScreenTemplate from "components/templates/screen-template/ScreenTemplate";
import DragTableContainer from "components/common/drag-table/DragTableContainer";
import DragTableColumn from "components/common/drag-table/DragTableColumn";
import DragItem from "components/common/drag-table/DragItem";
import PageHeader from "components/common/page-header/PageHeader";

const MitreMatrix: React.FC = () => {
	const { status, data, error } = useMitreMatrix();

	if (status === Status.pending || status === Status.idle)
		return <h1>Loading</h1>;

	return (
		<ScreenTemplate>
			<MitreMatrixStyled>
				<PageHeader>MITRE ATT&CK Matrix for Enterprise - Heat Map</PageHeader>
				<DragTableContainer>
					{data?.mitreMatrixData?.map((mMatrix) => (
						<DragTableColumn
							key={mMatrix._id}
							colName={mMatrix.mitreMatrixName}
						>
							{mMatrix?.mitreMatrixList?.map((matrixItem) => (
								<DragItem
									key={matrixItem.id}
									taskName={matrixItem.taskName}
									taskDescription={matrixItem.taskDescription}
									id={matrixItem.id}
									taskId={matrixItem.taskId}
								/>
							))}
						</DragTableColumn>
					))}
				</DragTableContainer>
			</MitreMatrixStyled>
		</ScreenTemplate>
	);
};

export default MitreMatrix;
