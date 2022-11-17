import { ReactNode } from "react";

type ResilienceScoreCard = {
	score: number;
	title: string;
	id: string;
	description: string;
};
export interface ExecutiveState {
	data: ExecutiveResponse;
	error: null;
	status: string;
}
type ExecutiveResponse = {
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
