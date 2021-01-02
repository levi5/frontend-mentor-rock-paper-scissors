import scoreboardContext from 'contexts/scoreboard';
import { useContext } from 'react';
import * as styles from './styles';

const Footer = () => {
	const {
		showHideModal,
		gameType,
		updateRule,
		updateNumberMatches,
		updatePlayerPoints,
		updateMachinePoints
	} = useContext(scoreboardContext);

	function openRules() {
		showHideModal();
	}

	function swapGame() {
		let game;
		if (gameType === 0) {
			game = 1;
		} else {
			game = 0;
		}
		updateRule(game);
		updateNumberMatches(0);
		updatePlayerPoints(-1);
		updateMachinePoints(-1);
	}

	return (
		<styles.Footer>
			<div id="swap-game" onClick={swapGame}>
				{gameType === 1 ? (
					<img
						id="RPS"
						src="/assets/images/hand-rock-100.png"
						alt="hand-rock"
					/>
				) : (
					<img
						id="RPSLS"
						src="/assets/images/spock-100.png"
						alt="spock"
					/>
				)}
			</div>
			<div id="footer-content" onClick={openRules}>
				<h5>RULES</h5>
			</div>
		</styles.Footer>
	);
};

export default Footer;
