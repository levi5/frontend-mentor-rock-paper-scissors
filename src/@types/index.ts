/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RPSProps {
	Select(e: any): void;
}

export interface OptionComponentProps {
	Type: string;
}
export interface OptionComponentPropsStyle {
	Type: string;
}

export type Values = {
	id: number;
	name: string;
	wins: Array<number>;
};

export type PlayerWinner = {
	id: number;
	name: string;
	win: string;
};

export interface ResultProps {
	Time: boolean;
	Winner: PlayerWinner;
	States: {
		playerState: string;
		machineState: string;
	};

	Functions: {
		Back(): void;
	};
}
