import Paper from 'components/Paper';
import Rock from 'components/Rock';
import Scissors from 'components/Scissors';

import { ResultProps } from '../../../@types';

import * as styles from './styles';

const Result: React.FC<ResultProps> = ({ Time, Winner, States, Functions }) => {
	function renderOption(name: string) {
		let button: JSX.Element;

		if (name === 'paper') {
			button = <Paper />;
		} else if (name === 'scissors') {
			button = <Scissors />;
		} else {
			button = <Rock />;
		}
		return button;
	}

	function renderPlayerOption() {
		return renderOption(States.playerState);
	}
	function renderMachineOption() {
		return renderOption(States.machineState);
	}

	function resultPlayerWinner(): JSX.Element {
		let text = '';

		if (Winner?.win == 'machine') {
			text = 'You lose';
		} else if (Winner?.win == 'player') {
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
					<div className="contains-result-buttons">
						{renderPlayerOption()}
					</div>
				</div>

				<div className={`display-result${Time ? ' active' : ''}`}>
					{resultPlayerWinner()}
				</div>
				<div id="contains-result-machine">
					{
						<>
							<h3>the house picked</h3>
							<div className="contains-result-buttons">
								{renderMachineOption()}
							</div>
						</>
					}
				</div>
			</div>
		</styles.Wrapper>
	);
};

export default Result;
