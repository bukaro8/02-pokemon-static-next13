'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Pokemon } from '@interfaces';
import { NextPage } from 'next';
import confetti from 'canvas-confetti';
import { existInFavorites, toggleFavorite } from '@utils/localFavorites';
interface Props {
	pokemon: Pokemon;
}
const PokemonDetailsInside: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorite, setIsInFavorite] = useState(false);
	useEffect(() => {
		setIsInFavorite(existInFavorites(pokemon.id));
	}, [pokemon.id]);
	const handleToggle = () => {
		toggleFavorite(pokemon.id);
		setIsInFavorite(!isInFavorite);
		!isInFavorite &&
			confetti({
				zIndex: 1,
				particleCount: 100,
				spread: 360,

				origin: {
					x: 0.8,
					y: 0.2,
				},
			});
	};
	return (
		<div className='h-screen flex flex-col items-center mt-4 shadow-xl'>
			<div className='flex justify-around w-screen'>
				<h1 className='text-3xl capitalize text-green-900 '>{pokemon.name}</h1>
				{isInFavorite ? (
					<button
						onClick={handleToggle}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
					>
						Quitar de Favoritos
					</button>
				) : (
					<button
						onClick={handleToggle}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
					>
						Guardar en Favoritos
					</button>
				)}
			</div>

			<div className='flex justify-around border border-white rounded-xl m-2'>
				<Image
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
					height={100}
					width={100}
				/>
				<Image
					src={pokemon.sprites.back_default}
					alt={pokemon.name}
					height={100}
					width={100}
				/>
				<Image
					src={pokemon.sprites.front_shiny}
					alt={pokemon.name}
					height={100}
					width={100}
				/>
				<Image
					src={pokemon.sprites.back_shiny}
					alt={pokemon.name}
					height={100}
					width={100}
				/>
			</div>
		</div>
	);
};

export default PokemonDetailsInside;
