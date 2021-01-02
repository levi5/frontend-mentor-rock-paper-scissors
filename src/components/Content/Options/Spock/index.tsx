import { OptionComponentProps } from '@types';
import * as styles from './styles';

const Spock: React.FC<OptionComponentProps> = ({ Type }) => (
	<styles.Wrapper Type={Type}>
		<button className="btn-select">
			<img src="/assets/images/icon-spock.svg" alt="spock" />
		</button>
	</styles.Wrapper>
);
export default Spock;
