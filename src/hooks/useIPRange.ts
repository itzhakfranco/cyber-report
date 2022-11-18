import { useContext } from "react";
import { IPRangeContext } from "store/contexts/ip-range.context";

export default function useIPRange() {
	const context = useContext(IPRangeContext);
	if (context === undefined) {
		throw new Error(`useIPRange must be used within a useIPRange Provider`);
	}
	return context;
}
