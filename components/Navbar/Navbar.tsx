import SearchBar from '@components/searchBar';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='bg-black/75 sticky top-0 flex h-20 justify-between items-center z-10'>
			<Link href={'/'}>
				<div className='flex text-white items-center'>
					<Image
						src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
						alt='mew'
						height={80}
						width={80}
						priority
					/>
					<h1>PokeApi</h1>
				</div>
			</Link>
			<SearchBar />
			<Link href={'/favorites'}>
				<button className='bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-12'>
					Favorites
				</button>
			</Link>
		</nav>
	);
};

export default Navbar;
