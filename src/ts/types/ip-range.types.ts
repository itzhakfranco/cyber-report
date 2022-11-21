import { ReactNode } from "react";

export type IPRangeContextProps = {
	children?: ReactNode;
};
export type IPRangeState = {
	data: IPRangeResponse;
	error: null;
	isLoading: Boolean;
};

export type IPRangeResponse = {
	[key: string]: string[] | [];
};
