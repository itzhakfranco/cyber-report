import styled from "styled-components";

export const DragTableContainerStyled = styled.div`
	border-top: none;
	border-right: 1px dashed #dadada;
	border-left: 1px dashed #dadada;
	border-bottom: 1px dashed #dadada;
	height: 820px;
	max-height: 820px;
	overflow-y: hidden;
	width: 100%;
	overflow-x: auto;
	display: flex;
`;

export const DragTableColumnStyled = styled.div`
	border: 2.5px solid #ffffff;
	width: 200px;
	max-width: 210px;
	overflow: auto;
	position: relative;
	::-webkit-scrollbar {
		width: 0;
	}

	.col-head {
		background: rgb(237, 239, 245);
		height: 85px;
		display: flex;
		justify-content: center;
		padding-top: 10%;
		font-weight: bold;
		position: sticky;
		top: 0;
		z-index: 5;
	}
	&:nth-of-type(even) {
		.col-head {
			background: rgb(234, 239, 255);
		}
	}

	.col-body {
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3px;
		z-index: 0;
	}
`;

export const DragItemStyled = styled.div`
	border: 2px solid #1d75cd;
	width: 100%;
	height: 265px;
	cursor: grab;

	.line-1 {
		height: 50%;
		background-color: rgb(212, 214, 222);
	}
	.line-2 {
		height: 50%;
		background-color: rgb(246, 246, 249);
	}

	.line-1,
	.line-2 {
		position: relative;
		z-index: 0;

		.task-name,
		.task-sec {
			text-align: left;
			display: block;
			padding-top: 25px;
			padding-left: 15px;
			font-weight: bold;
			font-size: 14px;
		}

		.indicator {
			position: absolute;
			right: 15px;
			bottom: 25px;
			height: 12px;
			width: 38px;
			border-radius: 150px;
			background-color: rgb(17, 132, 208);
		}

		.id,
		.task-id {
			position: absolute;
			left: 15px;
			bottom: 25px;
			height: 12px;
			font-size: 13px;
		}
	}
`;
