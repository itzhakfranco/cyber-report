import { ReactNode } from "react";
import { AxiosResponse, AxiosError } from "axios";

type ResilienceScoreCard = {
	score: number;
	title: string;
	id: string;
	description: string;
};

export type ExecutiveState = {
	data: ExecutiveResponse;
	error: null | AxiosError;
	isLoading: Boolean;
};

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
