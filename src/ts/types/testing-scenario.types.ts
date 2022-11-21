import { ReactNode } from "react";

export type TestingScenarioContextProps = {
	children?: ReactNode;
};
export type GroupData = {
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

export type TestingScenarioState = {
	data: TestingScenarioResponse;
	error: null;
	isLoading: Boolean;
};
