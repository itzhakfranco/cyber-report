import { useContext } from "react";
import { MitreMatrixContext } from "store/contexts/mitre-matrix.context";

export default function useMitreMatrix() {
	const context = useContext(MitreMatrixContext);
	if (context === undefined) {
		throw new Error(
			`useMitreMatrix must be used within a useMitreMatrix Prvoider`
		);
	}
	return context;
}
