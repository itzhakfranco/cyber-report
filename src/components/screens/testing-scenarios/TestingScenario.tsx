import React from "react";
import { TestingScenarioStyled } from "./TestingScenario.styled";
import Table from "components/common/table/Table";
import TableHead from "components/common/table/TableHead";
import TableBody from "components/common/table/TableBody";
import TableRow from "components/common/table/TableRow";
import TableHeadCell from "components/common/table/TableHeadCell";
import TableBodyCell from "components/common/table/TableBodyCell";
import ScreenTemplate from "components/templates/screen-template/ScreenTemplate";
import ListRow from "components/common/list-row/ListRow";
import useTestingScenario from "hooks/useTestingSernerio";
import PageHeader from "components/common/page-header/PageHeader";

const TestingScenario: React.FC = () => {
	const { isLoading, data } = useTestingScenario();
	const testingScenarioData = data?.testingScenarioData || [];

	if (isLoading) return <h1>Loading</h1>;

	return (
		<ScreenTemplate>
			<TestingScenarioStyled>
				<PageHeader>Testing Scenario Details</PageHeader>

				<Table>
					<TableHead>
						<TableRow>
							<TableHeadCell>Group</TableHeadCell>
							<TableHeadCell>Type</TableHeadCell>
							<TableHeadCell>Details</TableHeadCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{testingScenarioData.map((item) => (
							<TableRow key={item._id}>
								<TableBodyCell>{item.groupName}</TableBodyCell>
								<TableBodyCell>
									<ListRow groupList={item.groupData} groupType='key' />
								</TableBodyCell>
								<TableBodyCell>
									<ListRow groupList={item.groupData} groupType='value' />
								</TableBodyCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TestingScenarioStyled>
		</ScreenTemplate>
	);
};

export default TestingScenario;
