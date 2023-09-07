import { GetStaticPaths } from 'next';

import getPokemon from '../getPokemon';
import PokemonDetailsInside from './PokemonDetails';

interface Props {
	params: id;
}
interface id {
	id: string;
}
const PokemonDetails = async ({ params: { id } }: Props) => {
	if (parseInt(id) > 151 || parseInt(id) < 1) {
		return <h1>not valid id</h1>;
	}
	const pokemon = await getPokemon(id);
	return <PokemonDetailsInside pokemon={pokemon} />;
};

const iterador = () => {
	const accum = [];
	for (let i = 0; i <= 151; i++) {
		accum.push({ params: { id: i.toString() } });
	}
	return accum;
};
// export const getStaticPaths: GetStaticPaths = async (ctx) => {
// 	const arrayParams = iterador();
// 	return {
// 		paths: arrayParams,
// 		fallback: false,
// 	};
// };
export default PokemonDetails;
