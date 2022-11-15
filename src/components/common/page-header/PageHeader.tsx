import { IPropsPageHeader } from "ts/interfaces/Report.interface";
import React from "react";
import { PageHeaderStyle } from "./PageHeader.styled";

const PageHeader: React.FC<IPropsPageHeader> = ({ children }) => {
	return <PageHeaderStyle>{children}</PageHeaderStyle>;
};

export default PageHeader;
