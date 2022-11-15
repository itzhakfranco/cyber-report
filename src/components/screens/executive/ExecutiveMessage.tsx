import { Typography } from "@mui/material";
import * as Layout from "components/layout/Layout.styled";
import { ExecutiveMessageContainer } from "./Executive.styled";

const ExecutiveMessage = () => {
	return (
		<Layout.Row>
				<ExecutiveMessageContainer>
					<Typography>
						The Resilience Score could not be provided due to insufficient
						findings.
					</Typography>
					<Typography>
						Results for at least 2 score card categories are required to
						determine the overall Resilience Score.
					</Typography>
				</ExecutiveMessageContainer>
		</Layout.Row>
	);
};

export default ExecutiveMessage;
