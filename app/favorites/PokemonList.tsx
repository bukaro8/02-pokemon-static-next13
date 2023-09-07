'use client';
import React, { use, useEffect, useState } from 'react';
import { pokemons } from '@utils';
import { NextPage } from 'next';
import { Pokemon, PokemonListResponse } from '@interfaces';
import pokeApi from '@api/pokeApi';
import Card from '@components/card/Card';
interface Props {
	pokemonList: PokemonListResponse;
}
const FavoritesPage: NextPage<Props> = () => {
	// const { results } = pokemonList;
	const [favoritePokemon, setFavoritePokemon] = useState<number[]>();

	console.log(favoritePokemon);
	useEffect(() => {
		setFavoritePokemon(pokemons());
	}, []);

	return (
		<div className='flex justify-center items-center text-xl text-white h-screen'>
			{favoritePokemon?.length ? (
				favoritePokemon.map((id) => (
					<Card
						key={id}
						id={id}
						image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					/>
				))
			) : (
				<h1>No hay Favoritos</h1>
			)}
		</div>
	);
};

export default FavoritesPage;
