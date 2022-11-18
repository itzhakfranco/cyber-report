import { ReactNode } from "react";

export type MitreMatrixContextProps = {
	children?: ReactNode;
};

export type MitreMatrixState = {
	data: MitreMatrixResponse;
	error: null;
	isLoading: Boolean;
};

export type MitreMatrixPayloadType = {
	[key: string]: MitreMatrixResponse;
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
