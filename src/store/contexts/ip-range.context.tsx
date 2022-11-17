import { useReducer, useMemo, createContext, useEffect } from "react";

import { ReportName, Status } from "ts/enums/Report.enum";
import { IPRangeContextProps, IPRangeState } from "ts/types/report.types";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: IPRangeState = {
	data: {
		ipRangeData: [],
	},
	status: Status.idle,
	error: null,
};
const IPRangeContext = createContext<IPRangeState>(
	defaultState as IPRangeState
);
IPRangeContext.displayName = ReportName.IPRange;

function IPProvider({ children }: IPRangeContextProps) {
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
