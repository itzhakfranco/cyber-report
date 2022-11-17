import { useReducer, useEffect, useMemo, createContext } from "react";

import {
	TestingScenarioContextProps,
	TestingScenarioState,
} from "ts/types/testing-scenario.types";
import { ReportName, Status } from "ts/enums/Report.enum";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: TestingScenarioState = {
	status: Status.idle,
	data: {
		testingScenarioData: [],
	},
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

	const { data, error, status } = state;
	const value = useMemo(() => ({ data, error, status }), [data, error, status]);

	return (
		<TestingScenarioContext.Provider value={value}>
			{children}
		</TestingScenarioContext.Provider>
	);
}

export { TestingScenarioContext, TestingScenarioProvider };
