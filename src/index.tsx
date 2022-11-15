import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/style/global/reset.css";
import "./assets/style/global/global.css";
import "./assets/style/variables/variables.css";
import "./assets/style/vendors/react-router-dom.css";
import { ExecutiveProvider } from "store/contexts/executive.context";
import { IPProvider } from "store/contexts/ip-range.context";
import { MitreMatrixProvider } from "store/contexts/mitre-matrix.context";
import { TestingScenarioProvider } from "store/contexts/testing-scenario.context";
import { Compose } from "utils/utils";

ReactDOM.render(
	<React.StrictMode>
		<Compose
			components={[
				ExecutiveProvider,
				IPProvider,
				MitreMatrixProvider,
				TestingScenarioProvider,
				Router,
			]}
		>
			<App />
		</Compose>
	</React.StrictMode>,
	document.getElementById("root")
);
