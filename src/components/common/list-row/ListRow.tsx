import { IPropsListRow } from "ts/interfaces/Report.interface";
import React from "react";
import { ListRowStyle, RowStyle } from "./ListRow.styled";

const ListRow: React.FC<IPropsListRow> = ({ groupList, groupType }) => {
	const renderListRow = () => {
		if (groupType === "key") {
			return groupList.map((item, inx) => {
				if (Array.isArray(item.values)) {
					return item.values.map((imt, inx) => {
						if (inx === item.values.length - 1)
							return (
								<RowStyle $border={true} key={inx}>
									{item.key}
								</RowStyle>
							);
						return (
							<RowStyle key={inx} $border={false}>
								&nbsp;
							</RowStyle>
						);
					});
				} else {
					return (
						<RowStyle $border={true} key={inx}>
							{item.key}
						</RowStyle>
					);
				}
			});
		} else if (groupType === "value") {
			return groupList.map((item, inx) => {
				if (Array.isArray(item.values)) {
					return item.values.map((val, inx1) => (
						<RowStyle $border={true} key={inx1}>
							{val}
						</RowStyle>
					));
				} else {
					return (
						<RowStyle $border={true} key={inx}>
							{item.values}
						</RowStyle>
					);
				}
			});
		}
	};

	return <ListRowStyle>{renderListRow()}</ListRowStyle>;
};

export default ListRow;
