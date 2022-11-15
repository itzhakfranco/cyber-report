export interface IMitreMatrixResponse {
	Reconnaissance: Reconnaissance;
	initialAccess: any[];
	execution: any[];
	persistence: any[];
	privilegeEscalation: any[];
	defenseEvasion: any[];
	credentialAccess: any[];
	discovery: any[];
	lateralMovement: any[];
	collection: any[];
	commandControl: any[];
	exfiltration: any[];
	impact: any[];
}

interface Task {
	name: string;
	id: string;
}

interface SubTask {
	name: string;
	id: string;
}

interface Reconnaissance {
	tasks: Task[];
	subTasks: SubTask[];
}
