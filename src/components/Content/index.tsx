/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import Paper from 'components/Paper';
import Rock from 'components/Rock';
import Scissors from 'components/Scissors';
import Result from './Result/index';

import { values } from '../../config/data';

import { Values, PlayerWinner } from '../../@types';

import * as styles from './styles';

const Content = () => {
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
	// const [objOptions, setOptions] = useState((): Array<Values> => values);

	function player(option: string) {
		const [playerOption] = values.filter((item) => {
			const { name } = item;
			if (name === option) return item;
		});
		return playerOption;
	}

	function machine() {
		const number = Math.floor(Math.random() * values.length) + 1;
		const [machineOption] = values.filter((item) => {
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

		setMachineState(machineOption.name);
		setWinner(result);
		setTimeout(() => {
			setTime(true);
		}, 800);
	}

	function select(e: any) {
		const { option } = e.target.dataset;
		setPlayerState(option);
		game(option);
		setShowResult(!showResult);
	}
	function back() {
		setTime(false);
		setShowResult(!showResult);
	}

	return (
		<styles.Wrapper>
			{!showResult ? (
				<section id="contains-buttons">
					<img
						id="bg"
						src="/assets/images/bg-triangle.svg"
						alt="background triangle"
					/>
					<div
						className="contains_paper-button"
						data-option={'paper'}
						onClick={select}
					>
						<Paper />
					</div>
					<div
						className="contains_scissors-button"
						data-option={'scissors'}
						onClick={select}
					>
						<Scissors />
					</div>

					<div
						className="contains_rock-button"
						data-option={'rock'}
						onClick={select}
					>
						<Rock />
					</div>
				</section>
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
