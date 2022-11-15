import { useReducer, useMemo, createContext, useEffect } from "react";

import { ReportName, Status } from "ts/enums/Report.enum";
import { IReportContext } from "ts/interfaces/Report.interface";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: IReportContext = {
	status: Status.idle,
	data: [],
	error: null,
};
const IPRangeContext = createContext<any>(defaultState);
IPRangeContext.displayName = ReportName.IPRange;

function IPProvider({ children }) {
	const [state, dispatch] = useReducer(reportReducer, defaultState);

	useEffect(() => {
		getReport(dispatch, ReportName.IPRange);
	}, []);

	const { data, error, status } = state;
	const value = useMemo(() => ({ data, error, status }), [data, error, status]);

	return (
		<IPRangeContext.Provider value={value}>{children}</IPRangeContext.Provider>
	);
}

export { IPRangeContext, IPProvider };
