/* eslint-disable @typescript-eslint/no-explicit-any */
import Paper from 'components/Content/Options/Paper';
import Rock from 'components/Content/Options/Rock';
import Scissors from 'components/Content/Options/Scissors';

import * as styles from './styles';

interface RPSProps {
	Select(e: any): void;
}

const RPS: React.FC<RPSProps> = ({ Select }) => {
	return (
		<styles.Wrapper id="contains-buttons">
			<img
				id="bg"
				src="/assets/images/bg-triangle.svg"
				alt="background triangle"
			/>
			<div
				className="contains_paper-button"
				data-option={'paper'}
				onClick={Select}
			>
				<Paper Type="large" />
			</div>
			<div
				className="contains_scissors-button"
				data-option={'scissors'}
				onClick={Select}
			>
				<Scissors Type="large" />
			</div>

			<div
				className="contains_rock-button"
				data-option={'rock'}
				onClick={Select}
			>
				<Rock Type="large" />
			</div>
		</styles.Wrapper>
	);
};

export default RPS;
