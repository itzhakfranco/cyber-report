import { ReactNode } from "react";

type ResilienceScoreCard = {
	score: number;
	title: string;
	id: string;
	description: string;
};

type IPRangeResponse = {
	[key: string]: string[] | [];
};
type ExecutiveResponse = {
	name: string;
	description: string;
	type: string;
	timeDuration: string;
	userInput: string;
	resilienceScoreCard: ResilienceScoreCard[] | [];
};

export interface MitreMatrixState {
	data: MitreMatrixResponse;
	error: null;
	status: string;
}
type MitreMatrixResponse = {
	mitreMatrixData: mitreMatrixData[] | [];
};
type mitreMatrixData = {
	id: string;
	taskId: string;
	taskName: string;
	taskDescription: string;
};

type GroupData = {
	key: string;
	values: any;
};

type TestingScenarioData = {
	_id: string;
	groupName: string;
	groupData: GroupData[];
};

export type TestingScenarioResponse = {
	testingScenarioData: TestingScenarioData[];
};

export interface TestingScenarioState {
	data: TestingScenarioResponse;
	error: null;
	status: string;
}

export interface ExecutiveState {
	data: ExecutiveResponse;
	error: null;
	status: string;
}
export interface ExecutiveState {
	data: ExecutiveResponse;
	error: null;
	status: string;
}
export interface IPRangeState {
	data: IPRangeResponse;
	error: null;
	status: string;
}

export type ExecutiveContextProps = {
	children?: ReactNode;
};
export type IPRangeContextProps = {
	children?: ReactNode;
};
export type MitreMatrixContextProps = {
	children?: ReactNode;
};
export type TestingScenarioContextProps = {
	children?: ReactNode;
};

export interface IPropsTableBody {
	children: JSX.Element | React.ReactNode;
}

export interface IPropsTableBodyCell {
	children: JSX.Element | React.ReactNode | string | number | HTMLElement;
}
export interface IPropsTableHead {
	children: JSX.Element | React.ReactNode;
}

export interface IPropsTableRow {
	children?: JSX.Element | React.ReactNode | HTMLElement;
}

export interface IPropsTableHeadCell {
	children: JSX.Element | React.ReactNode | string | number | HTMLElement;
}

export interface IPropsTable {
	children: JSX.Element | React.ReactNode;
}

export interface IPropsListRow {
	groupList: any;
	groupType: string;
}

export interface IPropsIndicator {
	score: number;
}

export interface IPropsDragTableContainer {
	children: React.ReactNode[] | React.ReactNode;
}

export interface IPropsDragTableColumn {
	children: React.ReactNode[] | React.ReactNode;
	colName: string;
}

export interface IPropsDragItem {
	id: string;
	taskId: string;
	taskName: string;
	taskDescription: string;
}

export interface IPropsPageHeader {
	children?: string | number;
}

export interface IReportContext {
	status: "idle" | "pending" | "resolved" | "rejected";
	data: [];
	error: null;
	getData?: () => void;
}

export interface IContexDefaultlState {
	status: string;
	data: null;
	error: null;
}

export interface IPropsCompose {
	components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
	children: React.ReactNode;
}
