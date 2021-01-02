import Option from './Option';

import { ResultProps } from '@types';

import * as styles from './styles';

const Result: React.FC<ResultProps> = ({ Time, Winner, States, Functions }) => {
	function resultPlayerWinner(): JSX.Element {
		let text = '';

		if (Winner.win === 'machine') {
			text = 'You lose';
		} else if (Winner.win === 'player') {
			text = 'You win';
		} else {
			text = 'nobody won';
		}

		return (
			<>
				<h1>{text}</h1>
				<button onClick={Functions.Back}>play again</button>
			</>
		);
	}

	return (
		<styles.Wrapper>
			<div id="contains-result">
				<div id="contains-result-player">
					<h3>you picked</h3>
					<div
						className={`contains-result-buttons ${
							Winner.win === 'player' ? 'win' : ''
						}`}
					>
						<Option name={States.playerState} />
					</div>
				</div>

				<div className={`display-result${Time ? ' active' : ''}`}>
					{resultPlayerWinner()}
				</div>
				<div id="contains-result-machine">
					{
						<>
							<h3>the house picked</h3>
							<div
								className={`contains-result-buttons ${
									Winner.win === 'machine' ? 'win' : ''
								}`}
							>
								<Option name={States.machineState} />
							</div>
						</>
					}
				</div>
			</div>
		</styles.Wrapper>
	);
};

export default Result;
