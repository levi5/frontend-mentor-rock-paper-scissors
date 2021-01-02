/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';

import Result from '../Result/index';
import RPS from '../RPS';
import RPSLS from '../RPSLS';

import scoreboardContext from 'contexts/scoreboard';
import { game } from 'Game';

import {
	valuesRockPaperScissors,
	valuesRockPaperScissorsLizardSpock
} from '../../../config/data';

import { Values, PlayerWinner } from '@types';
import * as styles from './styles';

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

	function run(option: string) {
		const { winner, machineOption } = game(option, options);

		if (winner.win === 'player') {
			updatePlayerPoints(1);
		} else if (winner.win) {
			updateMachinePoints(1);
		}

		updateNumberMatches(1);
		setMachineState(machineOption.name);
		setWinner(winner);
		setTimeout(() => {
			setTime(true);
		}, 800);
	}

	function select(e: any): void {
		const { option } = e.target.dataset;
		setPlayerState(option);
		run(option);
		setShowResult(!showResult);
	}

	function back() {
		setTime(false);
		setShowResult(!showResult);
	}

	function rendersGameOptions(): JSX.Element {
		if (gameType === 0) {
			return <RPS Select={select} />;
		} else {
			return <RPSLS Select={select} />;
		}
	}

	return (
		<styles.Wrapper>
			{!showResult ? (
				rendersGameOptions()
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
