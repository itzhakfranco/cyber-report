import { useReducer, useEffect, useMemo, createContext } from "react";

import {
	ExecutiveContextProps,
	ExecutiveState,
} from "ts/types/executive.types";
import { ReportName } from "ts/enums/Report.enum";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: ExecutiveState = {
	error: null,
	isLoading: true,
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

	const { data, error, isLoading } = state;
	const value = useMemo(
		() => ({ data, error, isLoading }),
		[data, error, isLoading]
	);

	return (
		<ExecutiveContext.Provider value={value}>
			{children}
		</ExecutiveContext.Provider>
	);
}
