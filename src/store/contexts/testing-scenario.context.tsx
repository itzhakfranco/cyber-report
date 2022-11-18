import { useReducer, useEffect, useMemo, createContext } from "react";

import {
	TestingScenarioContextProps,
	TestingScenarioState,
} from "ts/types/testing-scenario.types";
import { ReportName } from "ts/enums/Report.enum";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

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
	const [state, dispatch] = useReducer(reportReducer, defaultState);

	useEffect(() => {
		getReport(dispatch, ReportName.TESTING_SCENARIO);
	}, []);

	const { data, error, isLoading } = state;
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
