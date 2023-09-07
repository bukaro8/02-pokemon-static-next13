import pokeApi from '@api/pokeApi';
import { PokemonListResponse } from '@interfaces';
import React from 'react';
import FavoritesPage from './PokemonList';

const getPokemon = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=150');
	return data;
};
const PokemonList = async () => {
	const pokemons = await getPokemon();

	return <FavoritesPage pokemonList={pokemons} />;
};

export default PokemonList;
