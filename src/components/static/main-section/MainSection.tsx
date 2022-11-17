import React from "react";
import { Routes, Route } from "react-router-dom";

import Executive from "components/screens/executive/Executive";
import IPRange from "components/screens/IP-range/IPRange";
import MitreMatrix from "components/screens/mitre-matrix/MitreMatrix";
import TestingScenario from "components/screens/testing-scenarios/TestingScenario";

import { ReportName } from "ts/enums/Report.enum";

const MainSection: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Executive />} />
			<Route path={ReportName.EXECUTIVE} element={<Executive />} />
			<Route path={ReportName.IPRange} element={<IPRange />} />
			<Route path={ReportName.MITRE_MATRIX} element={<MitreMatrix />} />
			<Route path={ReportName.TESTING_SCENARIO} element={<TestingScenario />} />
		</Routes>
	);
};

export default MainSection;
