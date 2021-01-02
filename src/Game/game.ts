import { Values } from '@types';
import { machine, player, winner } from 'Game';

export const game = (option: string, options: Values[]) => {
	const playerOption = player(option, options);
	const machineOption = machine(options);
	const result = winner(playerOption, machineOption);

	return {
		winner: result,
		machineOption
	};
};
