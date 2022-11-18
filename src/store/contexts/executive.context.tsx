import { useMemo, createContext } from "react";

import {
	ExecutiveContextProps,
	ExecutiveState,
} from "ts/types/executive.types";
import { ReportName } from "ts/enums/Report.enum";
import useFetch from "hooks/useFetch";

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
	const [data, error, isLoading] = useFetch(ReportName.EXECUTIVE, defaultState);

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
