import { useReducer, useEffect, useMemo, createContext } from "react";

import {
	ExecutiveContextProps,
	ExecutiveState,
} from "ts/types/executive.types";
import { ReportName, Status } from "ts/enums/Report.enum";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: ExecutiveState = {
	error: null,
	status: Status.idle,
	data: {
		name: "",
		description: "",
		type: "",
		timeDuration: "",
		userInput: "",
		resilienceScoreCard: [],
	},
};

export const ExecutiveContext = createContext<ExecutiveState>(
	defaultState as ExecutiveState
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
