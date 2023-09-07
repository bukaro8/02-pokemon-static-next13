import pokeApi from '@api/pokeApi';

export default async function getPokemonByName(name: string) {
	const { data } = await pokeApi.get(`pokemon/${name}`);
	return data;
}
