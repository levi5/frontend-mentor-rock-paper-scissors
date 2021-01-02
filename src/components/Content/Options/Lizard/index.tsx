import { OptionComponentProps } from '@types';
import * as styles from './styles';

const Lizard: React.FC<OptionComponentProps> = ({ Type }) => (
	<styles.Wrapper Type={Type}>
		<button className="btn-select">
			<img src="/assets/images/icon-lizard.svg" alt="lizard" />
		</button>
	</styles.Wrapper>
);

export default Lizard;
