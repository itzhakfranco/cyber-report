import { ReactNode } from "react";

type ResilienceScoreCard = {
	score: number;
	title: string;
	id: string;
	description: string;
};

export type ExecutiveState = {
	data: ExecutiveResponse;
	error: null;
	isLoading: Boolean;
};

export type ExecutivePayloadType = {
	[key: string]: ExecutiveResponse;
};

export type ExecutiveResponse = {
	name: string;
	description: string;
	type: string;
	timeDuration: string;
	userInput: string;
	resilienceScoreCard: ResilienceScoreCard[] | [];
};

export type ExecutiveContextProps = {
	children?: ReactNode;
};
