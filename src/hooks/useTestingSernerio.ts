import { useContext } from "react";
import { TestingScenarioContext } from "store/contexts/testing-scenario.context";

export default function useTestingScenario() {
	const context = useContext(TestingScenarioContext);
	if (context === undefined) {
		throw new Error(
			`useTestingScenario must be used within a TestingScenario Provider`
		);
	}
	return context;
}
