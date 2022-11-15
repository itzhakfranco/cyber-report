import styled from "styled-components";

interface IRowStyle {
	$border: boolean;
}

export const ListRowStyle = styled.div``;

export const RowStyle = styled.p`
	height: 40px;
	padding: 5px 0;
	&:not(:last-child) {
		${({ $border }: IRowStyle) => $border && `border-bottom: 2px solid #e4e4e4`}
	}
`;
