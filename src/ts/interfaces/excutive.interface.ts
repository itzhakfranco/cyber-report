export interface IexecutiveResponse {
	name: string;
	description: string;
	type: string;
	timeDuration: string;
	includeIPRange: string[];
	userInput: string;
	resilienceScoreCard: ResilienceScoreCard;
}

interface ResilienceScoreCard {
	score: number;
	title: string;
	id: string;
	description: string;
}
