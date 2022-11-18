import useIPRange from "hooks/useIPRange";
import React from "react";
import { IPRangeStyled } from "./IPRange.styles";
import PageHeader from "components/common/page-header/PageHeader";
import ScreenTemplate from "components/templates/screen-template/ScreenTemplate";
import ItemsCounter from "components/common/items-counter/ItemsCounter";
import ListItem from "components/common/list-item/ListItem";

const IPRange: React.FC = () => {
	const { isLoading, data, error } = useIPRange();

	if (isLoading) return <h1>Loading</h1>;

	return (
		<ScreenTemplate>
			<IPRangeStyled>
				<PageHeader>Include IP Range(s)</PageHeader>
				<ItemsCounter>
					(Listing {data.ipRangeData.length} of {data.ipRangeData.length} items)
				</ItemsCounter>
				{data.ipRangeData.map((item, index) => (
					<ListItem key={index}>{item}</ListItem>
				))}
			</IPRangeStyled>
		</ScreenTemplate>
	);
};

export default IPRange;
