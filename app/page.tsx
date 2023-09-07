import pokeApi from '@api/pokeApi';
import Card from '@components/card/Card';
import { PokemonListResponse } from '@interfaces';

const getPokemon = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=150');

	return data;
};

export default async function Home() {
	const pokemons = await getPokemon();
	const showPokemons = pokemons.results.map((el, index) => (
		<li key={el.name}>
			<Card
				id={index + 1}
				name={el.name}
				image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`}
			/>
		</li>
	));
	return (
		<main className='flex min-h-screen flex-col items-center'>
			<ul className='max-sm:w-[80%]   sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-6 gap-4'>
				{showPokemons}
			</ul>
			<button className='border'>Favorites</button>
		</main>
	);
}
