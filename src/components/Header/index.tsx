import { useContext, useEffect, useState } from 'react';
import * as styles from './styles';

import scoreboardContext from 'contexts/scoreboard';

const Header = () => {
	const [pointsState, setPoints] = useState(0);
	const { playerPoints } = useContext(scoreboardContext);

	useEffect(() => {
		setPoints(playerPoints);
	}, [playerPoints]);

	return (
		<styles.Header>
			<div id="scoreboard">
				<div className="group-01">
					<img src="/assets/images/logo.svg" />
				</div>

				<div className="group-01">
					<div id="score">
						<h4 className="score-title">Score</h4>
						<span className="score-number">{pointsState}</span>
					</div>
				</div>
			</div>
		</styles.Header>
	);
};

export default Header;
