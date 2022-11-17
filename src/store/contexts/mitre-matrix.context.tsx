import { useReducer, useEffect, useMemo, createContext } from "react";

import { ReportName, Status } from "ts/enums/Report.enum";
import { IReportContext } from "ts/interfaces/Report.interface";
import { reportReducer } from "store/reducers/report.reducer";
import { getReport } from "store/actions/report.action";

const defaultState: IReportContext = {
	status: Status.idle,
	data: [],
	error: null,
};
const MitreMatrixContext = createContext<IReportContext>(
	defaultState as IReportContext
);
MitreMatrixContext.displayName = ReportName.MITRE_MATRIX;

function MitreMatrixProvider({ children }) {
	const [state, dispatch] = useReducer(reportReducer, defaultState);

	useEffect(() => {
		getReport(dispatch, ReportName.MITRE_MATRIX);
	}, []);

	const { data, error, status } = state;
	const value = useMemo(() => ({ data, error, status }), [data, error, status]);

	return (
		<MitreMatrixContext.Provider value={value}>
			{children}
		</MitreMatrixContext.Provider>
	);
}

export { MitreMatrixContext, MitreMatrixProvider };
