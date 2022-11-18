import { useReducer, useMemo, createContext, useEffect } from "react";

import { ReportName } from "ts/enums/Report.enum";
import { IPRangeContextProps, IPRangeState } from "ts/types/ip-range.types";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: IPRangeState = {
	data: {
		ipRangeData: [],
	},
	isLoading: true,
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

	const { data, error, isLoading } = state;
	const value = useMemo(
		() => ({ data, error, isLoading }),
		[data, error, isLoading]
	);

	return (
		<IPRangeContext.Provider value={value}>{children}</IPRangeContext.Provider>
	);
}

export { IPRangeContext, IPProvider };
