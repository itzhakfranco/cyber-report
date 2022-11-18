import { useMemo, createContext } from "react";

import { ReportName } from "ts/enums/Report.enum";
import { IPRangeContextProps, IPRangeState } from "ts/types/ip-range.types";
import useFetch from "hooks/useFetch";

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
	const [data, error, isLoading] = useFetch(ReportName.IPRange, defaultState);

	const value = useMemo(
		() => ({ data, error, isLoading }),
		[data, error, isLoading]
	);

	return (
		<IPRangeContext.Provider value={value}>{children}</IPRangeContext.Provider>
	);
}

export { IPRangeContext, IPProvider };
