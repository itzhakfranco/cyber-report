import { useEffect, useReducer } from "react";
import { ReportActions } from "ts/enums/Report.enum";
import reportClient from "utils/reportClient";

const reportReducer = (state, action) => {
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
};
const fetchData = async (dispatch, url) => {
	try {
		const { data } = await reportClient.fetchReportData(url);
		dispatch({ type: ReportActions.RESPONSE_COMPLETE, payload: data });
	} catch (error) {
		dispatch({ type: ReportActions.RESPONSE_REJECTED, payload: error });
	} finally {
		dispatch({ type: ReportActions.SET_LOADING, payload: false });
	}
};

const useFetch = (url, resourceState) => {
	const [state, dispatch] = useReducer(reportReducer, resourceState);

	useEffect(() => {
		dispatch({ type: ReportActions.SET_LOADING, payload: true });
		fetchData(dispatch, url);
	}, []);

	return [state.data, state.loading, state.error];
};

export default useFetch;
