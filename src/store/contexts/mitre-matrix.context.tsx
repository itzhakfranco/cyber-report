import { useReducer, useEffect, useMemo, createContext } from "react";

import {
	MitreMatrixContextProps,
	MitreMatrixState,
} from "ts/types/mitre-matrix.types";
import { ReportName } from "ts/enums/Report.enum";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: MitreMatrixState = {
	isLoading: true,
	data: {
		mitreMatrixData: [],
	},
	error: null,
};
const MitreMatrixContext = createContext<MitreMatrixState>(
	defaultState as MitreMatrixState
);
MitreMatrixContext.displayName = ReportName.MITRE_MATRIX;

function MitreMatrixProvider({ children }: MitreMatrixContextProps) {
	const [state, dispatch] = useReducer(reportReducer, defaultState);

	useEffect(() => {
		getReport(dispatch, ReportName.MITRE_MATRIX);
	}, []);

	const { data, error, isLoading } = state;
	const value = useMemo(
		() => ({ data, error, isLoading }),
		[data, error, isLoading]
	);

	return (
		<MitreMatrixContext.Provider value={value}>
			{children}
		</MitreMatrixContext.Provider>
	);
}

export { MitreMatrixContext, MitreMatrixProvider };
