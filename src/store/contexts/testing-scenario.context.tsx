import { useReducer, useEffect, useMemo, createContext } from "react";

import { ReportName, Status } from "ts/enums/Report.enum";
import { IReportContext } from "ts/interfaces/Report.interface";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: IReportContext = {
	status: Status.idle,
	data: [],
	error: null,
};
const TestingScenarioContext = createContext<any>(defaultState);
TestingScenarioContext.displayName = ReportName.TESTING_SCENARIO;

function TestingScenarioProvider({ children }) {
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
