import { Values } from '@types';

export const winner = (player: Values, machine: Values) => {
	if (player.id !== machine.id) {
		let playerWinner;

		if (player.wins.indexOf(machine.id) !== -1) {
			playerWinner = {
				id: player.id,
				name: player.name,
				win: 'player'
			};
		}

		if (!playerWinner) {
			const machineWinner = {
				id: machine.id,
				name: machine.name,
				win: 'machine'
			};
			return machineWinner;
		}

		return playerWinner;
	} else {
		return {
			id: -1,
			name: '',
			win: ''
		};
	}
};
