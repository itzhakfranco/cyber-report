export interface ITestingScenarioResponse {
	_id: string;
	groupName: string;
	groupData: GroupData[];
}

interface GroupData {
	key: string;
	values: string | string[];
}
