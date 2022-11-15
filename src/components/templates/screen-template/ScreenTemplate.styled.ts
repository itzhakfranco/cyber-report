import styled from "styled-components";

export const ScreenTemplateStyle = styled.div`
	width: 100%;
	max-width: 1500px;
	margin: 0 auto;
	min-height: 940px;
	margin-top: 100px;
	margin-bottom: 100px;

	& > * {
		max-width: 1500px;
		margin: 2rem auto  0 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		& > * {
			width: 100%;
		}
	}
`;
