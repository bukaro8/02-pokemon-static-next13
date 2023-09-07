'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
	const router = useRouter();

	const [name, setName] = useState<string>();
	const handleSubmit = (event: any) => {
		event.preventDefault();
		router.push(`/name/${name}`);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
				focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
				invalid:border-pink-500 invalid:text-pink-600
				focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black'
				type='text'
				onChange={(e) => setName(e.target.value)}
				placeholder='Find Pokemon by Name'
				value={name}
			/>
		</form>
	);
};

export default SearchBar;
