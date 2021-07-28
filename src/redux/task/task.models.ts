interface addTask {
	type: string;
	payload: any;
}

interface editTask {
	type: string;
	payload: any;
}

interface removeTask {
	type: string;
	payload: any;
}

interface completeTask {
	type: string;
	payload: any;
}

interface sortTask {
	type: string;
	payload: any;
}

export type Action = addTask | editTask | removeTask | completeTask | sortTask;
