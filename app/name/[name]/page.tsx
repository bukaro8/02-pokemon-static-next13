import React from 'react';
import { GetStaticPaths } from 'next';
import PokemonDetailsInside from '@app/pokemon/[id]/PokemonDetails';

import getPokemonByName from '../getPokemonByName';
import { PokemonListResponse } from '@interfaces';
import pokeApi from '@api/pokeApi';
import async from '../../page';
interface Props {
	params: id;
}
interface id {
	name: string;
}
const PokemonByName = async ({ params: { name } }: Props) => {
	const pokemon = await getPokemonByName(name);
	return <PokemonDetailsInside pokemon={pokemon} />;
};
const getPokemon = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=150');

	return data;
};
// for (let i = 0; i <= 151; i++) {
// 	accum.push({ params: { id: i.toString() } });
// }
const iterador = async () => {
	const accum = [];
	const allPokemons = await getPokemon();
	const pokeArray = allPokemons.results.map((el) => el.name);
	for (const name of pokeArray) {
		accum.push({ params: { name: name } });
	}
	return accum;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const arrayParams = await iterador();
	return {
		paths: arrayParams,
		fallback: false,
	};
};
export default PokemonByName;
