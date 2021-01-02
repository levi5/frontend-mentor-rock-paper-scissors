import { Values } from '../@types';

export const machine = (options: Values[]) => {
	const number = Math.floor(Math.random() * options.length) + 1;
	const [machineOption] = options.filter((item) => {
		const { id } = item;
		if (id === number) return item;
	});
	return machineOption;
};
