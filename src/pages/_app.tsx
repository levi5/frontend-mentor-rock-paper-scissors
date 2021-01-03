import { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

import scoreboardContext from '../contexts/scoreboard';
const App = ({ Component, pageProps }: AppProps) => {
	const [matches, setMatches] = useState(0);
	const [playerPoints, setPlayerPoints] = useState(0);
	const [machinePoints, setMachinePoints] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [gameType, setgameType] = useState(0);

	function updateNumberMatches(math: number) {
		const value = matches + math;
		setMatches(value);
	}
	function updatePlayerPoints(point: number) {
		let value = 0;
		if (point < 0) {
			value = 0;
		} else {
			value = playerPoints + point;
		}

		setPlayerPoints(value);
	}
	function updateMachinePoints(point: number) {
		let value = 0;
		if (point < 0) {
			value = 0;
		} else {
			value = machinePoints + point;
		}
		setMachinePoints(value);
	}

	function showHideModal() {
		setShowModal(!showModal);
	}

	function updateRule(rule: number) {
		setgameType(rule);
	}

	return (
		<>
			<Head>
				<title>Rock - Paper - Scissors</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,300;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="shortcut icon"
					href="/assets/images/favicon-32x32.png"
				/>
				<link rel="apple-touch-icon" href="" />
				<link rel="description" href="" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>

			<scoreboardContext.Provider
				value={{
					matches,
					updateNumberMatches,
					playerPoints,
					machinePoints,
					updatePlayerPoints,
					updateMachinePoints,
					showModal,
					showHideModal,
					gameType,
					updateRule
				}}
			>
				<scoreboardContext.Consumer>
					{() => (
						<>
							<GlobalStyle />
							<Component {...pageProps} />
						</>
					)}
				</scoreboardContext.Consumer>
			</scoreboardContext.Provider>
		</>
	);
};

export default App;
