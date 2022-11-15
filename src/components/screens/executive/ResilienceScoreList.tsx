import { List, Divider } from "@mui/material";
import * as Layout from "components/layout/Layout.styled";
import { Status } from "ts/enums/Report.enum";
import ResilienceScoreItem from "./ResilienceScoreItem";
import PageHeader from "components/common/page-header/PageHeader";
import useExecutive from "hooks/useExecutive";

const ResilienceScoreList = () => {
	const {
		status,
		error,
		data: { executiveData },
	} = useExecutive();

	if (status === Status.pending || status === Status.idle)
		return <h1>Loading</h1>;

	return (
		<>
		<PageHeader>Resilience Score Card</PageHeader>
		<Layout.Row>
			<List>
				{executiveData.resilienceScoreCard.map((data) => (
					<ResilienceScoreItem key={data.id} data={data} />
				))}
			</List>
			<Divider variant='middle' />
		</Layout.Row>
		</>
	);
};

export default ResilienceScoreList;
