import reportClient from "utils/reportClient";
import { ReportActions } from "ts/enums/Report.enum";

export async function getReport(dispatch, reportName) {
	try {
		const { data } = await reportClient.fetchReportData(reportName);
		dispatch({ type: ReportActions.RESPONSE_COMPLETE, payload: data });
	} catch (error) {
		dispatch({ type: ReportActions.RESPONSE_REJECTED, payload: error });
	} finally {
		dispatch({ type: ReportActions.SET_LOADING, payload: false });
	}
}
