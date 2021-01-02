import Lizard from 'components/Content/Options/Lizard';
import Paper from 'components/Content/Options/Paper';
import Rock from 'components/Content/Options/Rock';
import Scissors from 'components/Content/Options/Scissors';
import Spock from 'components/Content/Options/Spock';
import React from 'react';

type Props = {
	name: string;
};

const Option: React.FC<Props> = ({ name }) => {
	function render() {
		let button: JSX.Element;

		if (name === 'paper') {
			button = <Paper Type="large" />;
		} else if (name === 'scissors') {
			button = <Scissors Type="large" />;
		} else if (name === 'rock') {
			button = <Rock Type="large" />;
		} else if (name === 'lizard') {
			button = <Lizard Type="large" />;
		} else {
			button = <Spock Type="large" />;
		}
		return button;
	}

	return <>{render()}</>;
};

export default Option;
