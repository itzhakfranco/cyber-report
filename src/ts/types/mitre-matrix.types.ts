import { ReactNode } from "react";

export type MitreMatrixContextProps = {
	children?: ReactNode;
};
export type MitreMatrixState = {
	data: MitreMatrixResponse;
	error: null;
	status: string;
};
type MitreMatrixResponse = {
	mitreMatrixData: mitreMatrixData[] | [];
};
type mitreMatrixData = {
	id: string;
	taskId: string;
	taskName: string;
	taskDescription: string;
};
