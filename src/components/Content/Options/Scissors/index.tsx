import { OptionComponentProps } from '@types';
import * as styles from './styles';

const Scissors: React.FC<OptionComponentProps> = ({ Type }) => (
	<styles.Wrapper Type={Type}>
		<button className="btn-select">
			<img src="/assets/images/icon-scissors.svg" alt="scissors" />
		</button>
	</styles.Wrapper>
);

export default Scissors;
