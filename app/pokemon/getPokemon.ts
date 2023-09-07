import pokeApi from '@api/pokeApi';

export default async function getPokemon(id: string) {
	const { data } = await pokeApi.get(`pokemon/${id}`);
	return data;
}
