import { AxiosResponse } from "axios";

export interface IPropsTableBody {
	children: JSX.Element | React.ReactNode;
}

export interface IPropsTableHead {
	children: JSX.Element | React.ReactNode;
}

export interface IPropsTableBodyCell {
	children: JSX.Element | React.ReactNode | string | number | HTMLElement;
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

export interface IProps {
	children?: React.ReactNode;
}

export interface IPropsCompose {
	components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
	children: React.ReactNode;
}

export interface IHttpService {
	get: (url: string) => Promise<AxiosResponse>;
	post: (url: string, data: any) => Promise<AxiosResponse>;
	put: (url: string, data: any) => Promise<AxiosResponse>;
	delete: (url: string) => Promise<AxiosResponse>;
}
