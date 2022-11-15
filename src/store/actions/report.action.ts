import reportClient from "utils/reportClient";
import { ReportActions } from "ts/enums/Report.enum";

export async function getReport(dispatch, reportName) {
	dispatch({ type: ReportActions.FETCH_REPORT });
	try {
		const { data } = await reportClient.fetchReportData(reportName);
		dispatch({ type: ReportActions.FETCH_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ReportActions.FETCH_FAILURE, payload: error });
	}
}
