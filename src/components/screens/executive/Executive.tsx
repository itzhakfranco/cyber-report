import React from "react";
import useExecutive from "hooks/useExecutive";
import ExecutiveSummary from "./ExecutiveSummary";
import ResilienceScoreList from "./ResilienceScoreList";
import ExecutiveMessage from "./ExecutiveMessage";
import ResilienceScoreSummary from "./ResilienceScoreSummary";
import { Status } from "ts/enums/Report.enum";
import ScreenTemplate from "components/templates/screen-template/ScreenTemplate";
import PageHeader from "components/common/page-header/PageHeader";

const Executive: React.FC = () => {
	const { status } = useExecutive();

	if (status === Status.pending || status === Status.idle)
		return <h1>Loading</h1>;

	return (
		<ScreenTemplate>
			<PageHeader>Executive Summary</PageHeader>
			<ExecutiveSummary />
			<ExecutiveMessage />
			<ResilienceScoreList />
			<ResilienceScoreSummary />
		</ScreenTemplate>
	);
};

export default Executive;
