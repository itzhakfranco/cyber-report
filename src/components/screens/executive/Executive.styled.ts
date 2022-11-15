import styled from "styled-components";
import { Alert, TableContainer as muiTableContainer } from "@mui/material";

export const ExecutiveMessageContainer = styled(Alert).attrs({
	sx: {
		height: "125px",
		borderRadius: "16px",
		width: "100%",
		alignItems: "center",
	},
	severity: "info",
})``;

export const TableContainer = styled(muiTableContainer).attrs({
	sx: {
		border: 0,
		borderRadius: "2px",
		boxShadow: "0 1px 2px rgb(0 0 0 / 24%)",
		fontSize: "13px",
		fontWeight: 400,
	},
})``;
