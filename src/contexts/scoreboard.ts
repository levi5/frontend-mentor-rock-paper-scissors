/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const scoreboardContext = createContext({
	matches: 0,
	playerPoints: 0,
	machinePoints: 0,
	updateNumberMatches: (match: number): void => {},
	updatePlayerPoints: (point: number): void => {},
	updateMachinePoints: (point: number): void => {},

	showModal: false,
	showHideModal: (): void => {},
	gameType: 0,
	updateRule: (rule: number): void => {}
});

export default scoreboardContext;
