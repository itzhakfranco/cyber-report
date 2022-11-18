import { ReactNode, PropsWithChildren, JSXElementConstructor } from "react";

export type IPropsTableBody = {
	children: JSX.Element | ReactNode;
};

export type IPropsTableBodyCell = {
	children: JSX.Element | ReactNode | string | number | HTMLElement;
};
export type IPropsTableHead = {
	children: JSX.Element | ReactNode;
};

export type IPropsTableRow = {
	children?: JSX.Element | ReactNode | HTMLElement;
};

export type IPropsTableHeadCell = {
	children: JSX.Element | ReactNode | string | number | HTMLElement;
};

export type IPropsTable = {
	children: JSX.Element | ReactNode;
};

export type IPropsListRow = {
	groupList: any;
	groupType: string;
};

export type IPropsIndicator = {
	score: number;
};

export type IPropsDragTableContainer = {
	children: ReactNode[] | ReactNode;
};

export type IPropsDragTableColumn = {
	children: ReactNode[] | ReactNode;
	colName: string;
};

export type IPropsDragItem = {
	id: string;
	taskId: string;
	taskName: string;
	taskDescription: string;
};

export type IPropsPageHeader = {
	children?: string | number;
};

export type IReportContext = {
	isLoading: Boolean;
	data: [];
	error: null;
};

export type IPropsCompose = {
	components: Array<JSXElementConstructor<PropsWithChildren<any>>>;
	children: ReactNode;
};
