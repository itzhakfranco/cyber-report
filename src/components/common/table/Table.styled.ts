import styled from "styled-components";

export const TableStyle = styled.table`
	width: 100%;
	text-align: left;
	font-size: 14px;
	margin-bottom: 5rem;
`;

export const TableHeadStyle = styled.thead``;
export const TableBodyStyle = styled.tbody``;

export const TableRowStyle = styled.tr`
	border-bottom: 2px solid #e4e4e4;
`;

export const TableHeadCellStyle = styled.th`
	padding-bottom: 20px;
	position: relative;
	padding-left: 5px;
	font-weight: bold;

	&::after {
		content: "";
		position: absolute;
		top: -5px;
		left: -3px;
		width: 2px;
		height: 85%;
		background-color: #d4d4d4;
	}

	&:first-child {
		padding-left: 10px;
		&::after {
			display: none;
		}
	}
`;

export const TableBodyCellStyle = styled.td`
	padding-bottom: 10px;
	padding-top: 10px;
	width: 30%;

	&:first-child {
		font-weight: bold;
		padding-left: 10px;
	}
`;
