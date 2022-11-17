import { List, Divider } from "@mui/material";
import { Row } from "components/layout/Layout.styled";
import ResilienceScoreItem from "./ResilienceScoreItem";
import PageHeader from "components/common/page-header/PageHeader";
import useExecutive from "hooks/useExecutive";

const ResilienceScoreList = () => {
	const {
		error,
		data: { resilienceScoreCard },
	} = useExecutive();

	return (
		<>
			<PageHeader>Resilience Score Card</PageHeader>
			<Row>
				<List>
					{resilienceScoreCard?.map((data) => (
						<ResilienceScoreItem key={data.id} data={data} />
					))}
				</List>
				<Divider variant='middle' />
			</Row>
		</>
	);
};

export default ResilienceScoreList;
