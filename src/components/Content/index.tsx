/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';

import Result from './Result/index';
import {
	valuesRockPaperScissors,
	valuesRockPaperScissorsLizardSpock
} from '../../config/data';

import { Values, PlayerWinner } from '../../@types';

import * as styles from './styles';
import scoreboardContext from 'contexts/scoreboard';
import RPS from './RPS';
import RPSLS from './RPSLS';

const Content = () => {
	const {
		updateNumberMatches,
		updatePlayerPoints,
		updateMachinePoints,
		gameType
	} = useContext(scoreboardContext);
	const [machineState, setMachineState] = useState('');
	const [option, setPlayerState] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [time, setTime] = useState(false);

	const [playerWinner, setWinner] = useState(
		(): PlayerWinner => ({
			id: -1,
			name: '',
			win: ''
		})
	);
	const [options, setOptions] = useState(
		(): Array<Values> => valuesRockPaperScissors
	);

	useEffect(() => {
		if (gameType === 0) {
			setOptions(valuesRockPaperScissors);
		} else {
			setOptions(valuesRockPaperScissorsLizardSpock);
		}
	}, [gameType]);

	function player(option: string) {
		const [playerOption] = options.filter((item) => {
			const { name } = item;
			if (name === option) return item;
		});
		return playerOption;
	}

	function machine() {
		const number = Math.floor(Math.random() * options.length) + 1;
		const [machineOption] = options.filter((item) => {
			const { id } = item;
			if (id === number) return item;
		});
		return machineOption;
	}

	function winner(player: Values, machine: Values) {
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
	}

	function game(option: string) {
		const playerOption = player(option);
		const machineOption = machine();
		const result = winner(playerOption, machineOption);

		if (result.win === 'player') {
			updatePlayerPoints(1);
		} else if (result.win) {
			updateMachinePoints(1);
		}

		updateNumberMatches(1);
		setMachineState(machineOption.name);
		setWinner(result);
		setTimeout(() => {
			setTime(true);
		}, 800);
	}

	function select(e: any): void {
		const { option } = e.target.dataset;
		setPlayerState(option);
		game(option);
		setShowResult(!showResult);
	}
	function back() {
		setTime(false);
		setShowResult(!showResult);
	}

	function test(): JSX.Element {
		if (gameType === 0) {
			return <RPS Select={select} />;
		} else {
			return <RPSLS Select={select} />;
		}
	}

	return (
		<styles.Wrapper>
			{!showResult ? (
				test()
			) : (
				<Result
					Time={time}
					Winner={playerWinner}
					States={{
						playerState: option,
						machineState: machineState
					}}
					Functions={{
						Back: back
					}}
				/>
			)}
		</styles.Wrapper>
	);
};

export default Content;
