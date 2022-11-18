import { ReportActions } from "ts/enums/Report.enum";

function reportReducer(state, action) {
	switch (action.type) {
		case ReportActions.SET_LOADING: {
			return { ...state, isLoading: action.payload };
		}
		case ReportActions.RESPONSE_COMPLETE: {
			return { ...state, data: action.payload };
		}
		case ReportActions.RESPONSE_REJECTED: {
			return { ...state, error: action.payload };
		}
		default: {
			return state;
		}
	}
}

export { reportReducer };
