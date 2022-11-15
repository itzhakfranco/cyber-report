import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
} from "@mui/material";
import * as Layout from "components/layout/Layout.styled";
import * as Styled from "./Executive.styled";

const ExecutiveSummary = () => {
	function createData(
		name: string,
		calories: string,
		fat: string,
		carbs: string,
		protein: string,
		foo: string
	) {
		return { name, calories, fat, carbs, protein, foo };
	}
	const rows = [
		createData(
			"delete test",
			"d",
			" Penetration Testing (Black Box)",
			"Aug 03 2022 12:00 - Aug 04 2022 12:01, 24:01",
			"192.168.2.1 1 Ranges",
			"1 - Network Rescan(s)"
		),
	];
	return (
		<Layout.Row>
				<Styled.TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name:</TableCell>
								<TableCell align='right'>Description:</TableCell>
								<TableCell align='right'>Type:</TableCell>
								<TableCell align='right'>Time & Duration:</TableCell>
								<TableCell align='right'>Time & Duration:</TableCell>
								<TableCell align='right'>User Input:</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									sx={{
										textAlign: "intial",
									}}
									key={row.name}
								>
									<TableCell component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell align='right'>{row.calories}</TableCell>
									<TableCell align='right'>{row.fat}</TableCell>
									<TableCell align='right'>{row.carbs}</TableCell>
									<TableCell align='right'>{row.protein}</TableCell>
									<TableCell align='right'>{row.foo}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Styled.TableContainer>
		</Layout.Row>
	);
};

export default ExecutiveSummary;
