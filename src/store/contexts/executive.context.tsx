import { useReducer, useEffect, useMemo, createContext } from "react";

import { ExecutiveContextProps } from "ts/types/report.types";
import { ReportName, Status } from "ts/enums/Report.enum";
import { IReportContext } from "ts/interfaces/Report.interface";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: IReportContext = {
	status: Status.idle,
	data: [],
	error: null,
};

export const ExecutiveContext = createContext<IReportContext>(
	defaultState as IReportContext
);
ExecutiveContext.displayName = ReportName.EXECUTIVE;

export function ExecutiveProvider({ children }: ExecutiveContextProps) {
	const [state, dispatch] = useReducer(reportReducer, defaultState);

	useEffect(() => {
		getReport(dispatch, ReportName.EXECUTIVE);
	}, []);

	const { data, error, status } = state;
	const value = useMemo(() => ({ data, error, status }), [data, error, status]);

	return (
		<ExecutiveContext.Provider value={value}>
			{children}
		</ExecutiveContext.Provider>
	);
}
