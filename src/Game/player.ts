import { Values } from '../@types';

export const player = (optionName: string, options: Values[]) => {
	const [playerOption] = options.filter((item) => {
		const { name } = item;
		if (name === optionName) return item;
	});
	return playerOption;
};
