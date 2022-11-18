import { useMemo, createContext } from "react";

import {
	TestingScenarioContextProps,
	TestingScenarioState,
} from "ts/types/testing-scenario.types";
import { ReportName } from "ts/enums/Report.enum";
import useFetch from "hooks/useFetch";

const defaultState: TestingScenarioState = {
	data: {
		testingScenarioData: [],
	},
	isLoading: true,
	error: null,
};
const TestingScenarioContext = createContext<TestingScenarioState>(
	defaultState as TestingScenarioState
);
TestingScenarioContext.displayName = ReportName.TESTING_SCENARIO;

function TestingScenarioProvider({ children }: TestingScenarioContextProps) {
	const [data, error, isLoading] = useFetch(
		ReportName.TESTING_SCENARIO,
		defaultState
	);

	const value = useMemo(
		() => ({ data, error, isLoading }),
		[data, error, isLoading]
	);

	return (
		<TestingScenarioContext.Provider value={value}>
			{children}
		</TestingScenarioContext.Provider>
	);
}

export { TestingScenarioContext, TestingScenarioProvider };
