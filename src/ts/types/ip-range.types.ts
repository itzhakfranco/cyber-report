import { ReactNode } from "react";

export type IPRangeContextProps = {
	children?: ReactNode;
};
export type IPRangeState = {
	data: IPRangeResponse;
	error: null;
	status: string;
};

type IPRangeResponse = {
	[key: string]: string[] | [];
};
