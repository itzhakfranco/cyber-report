import styled from "styled-components";

interface IProps {
	$score: number;
}

export const IndicatorStyled = styled.div`
	width: 200px;
	height: 24px;
	border-radius: 150px;
	display: flex;
	align-items: center;
	background-color: #d3d3d3;
	position: relative;

	.line-indicator {
		position: relative;
		font-size: 14px;
		background: #31a7fc;
		height: 100%;
		width: calc(200px / 100 * ${(props) => props.$score});
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 10px;
		border-top-left-radius: 150px;
		border-bottom-left-radius: 150px;
		animation: 1s ease-in-out 0s 1 normal forwards running indicator-fade-in;

		${({ $score }: IProps) => {
			if ($score < 0) {
				return `
                display: none;
                `;
			}
		}}

		&::before {
			content: "";
			position: absolute;
			right: 0;
			background: #fff;
			height: 100%;
			width: 3.5px;
			border-right: 0.1px solid #00000032;
		}

		@keyframes indicator-fade-in {
			0% {
				width: 0;
			}
		}
	}

	.score {
		position: absolute;
		top: -15px;
		left: 0;
		padding-left: 5px;
		font-size: 12px;
	}
`;
