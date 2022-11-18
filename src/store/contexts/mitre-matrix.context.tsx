import { useMemo, createContext } from "react";

import {
	MitreMatrixContextProps,
	MitreMatrixState,
} from "ts/types/mitre-matrix.types";
import { ReportName } from "ts/enums/Report.enum";
import useFetch from "hooks/useFetch";

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
	const [data, error, isLoading] = useFetch(
		ReportName.MITRE_MATRIX,
		defaultState
	);

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
