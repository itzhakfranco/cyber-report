import { ReportActions, Status } from "ts/enums/Report.enum";

function reportReducer(state, action) {
	switch (action.type) {
		case ReportActions.FETCH_REPORT: {
			return { ...state, status: Status.pending };
		}
		case ReportActions.FETCH_SUCCESS: {
			return { ...state, data: action.payload, status: Status.resolved };
		}
		case ReportActions.FETCH_FAILURE: {
			return { ...state, status: "rejected", payload: Status.rejected };
		}
		default: {
			return state;
		}
	}
}

export { reportReducer };
