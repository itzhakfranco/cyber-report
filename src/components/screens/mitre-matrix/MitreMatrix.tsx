import React from "react";

import { MitreMatrixStyled } from "./MitreMatrix.styled";
import ScreenTemplate from "components/templates/screen-template/ScreenTemplate";
import DragTableContainer from "components/common/drag-table/DragTableContainer";
import DragTableColumn from "components/common/drag-table/DragTableColumn";
import DragItem from "components/common/drag-table/DragItem";
import PageHeader from "components/common/page-header/PageHeader";
import useMitreMatrix from "hooks/useMitreMatrix";

const MitreMatrix: React.FC = () => {
	const { data } = useMitreMatrix();
	const mitreMatrixData = data?.mitreMatrixData || [];

	return (
		<ScreenTemplate>
			<MitreMatrixStyled>
				<PageHeader>MITRE ATT&CK Matrix for Enterprise - Heat Map</PageHeader>
				<DragTableContainer>
					{mitreMatrixData.map((mMatrix) => (
						<DragTableColumn
							key={mMatrix._id}
							colName={mMatrix.mitreMatrixName}
						>
							{mMatrix.mitreMatrixList.map((matrixItem) => (
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
