import Paper from 'components/Paper';
import Rock from 'components/Rock';
import Scissors from 'components/Scissors';
import { useState } from 'react';
import * as styles from './styles';

type Player = {
	id: number;
	name: string;
	wins: Array<number>;
};
type PlayerWinner = {
	id: number;
	name: string;
	win: string;
};

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
	const [objOptions, setOptions] = useState([
		{
			id: 1,
			name: 'rock',
			wins: [3]
		},
		{
			id: 2,
			name: 'paper',
			wins: [1]
		},
		{
			id: 3,
			name: 'scissors',
			wins: [2]
		}
	]);

	function player(option: string) {
		const [playerOption] = objOptions.filter((item) => {
			const { name } = item;
			if (name === option) return item;
		});
		return playerOption;
	}

	function machine() {
		const number = Math.floor(Math.random() * objOptions.length) + 1;
		const [machineOption] = objOptions.filter((item) => {
			const { id } = item;
			if (id === number) return item;
		});
		return machineOption;
	}

	function winner(player: Player, machine: Player) {
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
		setMachineState(machineOption.name);

		const result = winner(playerOption, machineOption);
		setWinner(result);

		setTimeout(() => {
			setTime(true);
		}, 1500);
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

	function renderOption(name: string) {
		let button: JSX.Element;
		if (name === 'paper') {
			return (button = <Paper />);
		} else if (name === 'scissors') {
			return (button = <Scissors />);
		} else if (name === 'rock') {
			return (button = <Rock />);
		}
	}

	function renderPlayerOption() {
		return renderOption(option);
	}
	function renderMachineOption() {
		return renderOption(machineState);
	}

	function resultPlayerWinner() {
		let fragment: JSX.Element;
		if (playerWinner?.win == 'machine') {
			fragment = (
				<>
					<h1>You lose</h1>
					<button onClick={back}>play again</button>
				</>
			);
		} else if (playerWinner?.win == 'player') {
			fragment = (
				<>
					<h1>You win</h1>
					<button onClick={back}>play again</button>
				</>
			);
		} else {
			fragment = (
				<>
					<h1>nobody won</h1>
					<button onClick={back}>play again</button>
				</>
			);
		}

		return fragment;
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
				<section id="contains-result">
					<div id="contains-result-player">
						<h3>you picked</h3>
						{renderPlayerOption()}
					</div>

					<div className={`display-result${time ? ' active' : ''}`}>
						{resultPlayerWinner()}
					</div>

					<div id="contains-result-machine">
						{
							<>
								<h3>the house picked</h3>
								{renderMachineOption()}
							</>
						}
					</div>
				</section>
			)}
		</styles.Wrapper>
	);
};

export default Content;
