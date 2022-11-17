import { ReactNode } from "react";

export type TestingScenarioContextProps = {
	children?: ReactNode;
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

type TestingScenarioResponse = {
	testingScenarioData: TestingScenarioData[];
};

export type TestingScenarioState = {
	data: TestingScenarioResponse;
	error: null;
	status: string;
};
