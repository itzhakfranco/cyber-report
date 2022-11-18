import { useContext } from "react";
import { ExecutiveContext } from "store/contexts/executive.context";

export default function useExecutive() {
	const context = useContext(ExecutiveContext);
	if (context === undefined) {
		throw new Error(`useExecutive must be used within a Executive Prvoider`);
	}
	return context;
}
