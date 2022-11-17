import React from "react";
import { IPropsIndicator } from "ts/types/components-props.types";
import { IndicatorStyled } from "./Indicator.styled";

const Indicator: React.FC<IPropsIndicator> = ({ score }) => {
	const scoreData = score === -1 ? "not supported" : score + "%";

	return (
		<IndicatorStyled $score={score}>
			<div className='line-indicator'></div>
			<div className='score'>{scoreData}</div>
		</IndicatorStyled>
	);
};

export default Indicator;
