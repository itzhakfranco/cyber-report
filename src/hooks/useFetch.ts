import { Dispatch, useEffect, useReducer } from "react";
import { ReportActions } from "ts/enums/Report.enum";
import reportClient from "utils/reportClient";
import { ExecutiveState } from "ts/types/executive.types";
import { MitreMatrixState } from "ts/types/mitre-matrix.types";
import { TestingScenarioState } from "ts/types/testing-scenario.types";
import { IPRangeState } from "ts/types/ip-range.types";
import { AxiosResponse, AxiosError } from "axios";

// enum ReportState {
// 	ExecutiveState,
// 	IPRangeState,
// 	MitreMatrixState,
// 	TestingScenarioState,
// }

type ReportPayload = {
	error: null | AxiosError | {};
	isLoading: Boolean;
	data: ReportResponse | {};
};
enum ReportResponse {
	ExecutiveResponse,
	IPRangeResponse,
	MitreMatrixResponse,
	TestingScenarioResponse,
}

type Actions = {
	type: ReportActions;
	payload: ReportPayload;
};
const reportReducer = (state: ReportPayload, action: Actions) => {
	switch (action.type) {
		case ReportActions.SET_LOADING: {
			return { ...state, isLoading: Boolean(action.payload) };
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
};

const fetchData = async (dispatch: Dispatch<Actions>, url: string) => {
	try {
		const response: AxiosResponse = await reportClient.fetchReportData(url);
		dispatch({ type: ReportActions.RESPONSE_COMPLETE, payload: response.data });
	} catch (error) {
		dispatch({
			type: ReportActions.RESPONSE_REJECTED,
			payload: error as AxiosError,
		});
	} finally {
		dispatch({ type: ReportActions.SET_LOADING, payload: false });
	}
};

const useFetch = (url, resourceState) => {
	const [state, dispatch] = useReducer(reportReducer, resourceState);

	useEffect(() => {
		fetchData(dispatch, url);
	}, []);

	return [state.data, state.isLoading, state.error];
};

export default useFetch;
