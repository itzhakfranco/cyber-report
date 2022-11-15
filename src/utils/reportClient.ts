import { AxiosResponse } from "axios";
import httpService from "services/http-service";
import { ReportName } from "ts/enums/Report.enum";

function fetchReportData(reportName: string): Promise<AxiosResponse> {
	switch (reportName) {
		case ReportName.EXECUTIVE:
			return httpService.get(ReportName.EXECUTIVE + ".json");
		case ReportName.IPRange:
			return httpService.get(ReportName.IPRange + ".json");
		case ReportName.MITRE_MATRIX:
			return httpService.get(ReportName.MITRE_MATRIX + ".json");
		case ReportName.TESTING_SCENARIO:
			return httpService.get(ReportName.TESTING_SCENARIO + ".json");
		default:
			return Promise.reject("Invalid Report Name");
	}
}
const reportClient = { fetchReportData };
export default reportClient;
