import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

interface Props {
	image: string;
	name?: string;
	id: number;
}
const blur: CSSProperties = {
	background: 'rgba(255, 255, 255, 0.1)',
	borderRadius: '16px',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
};
const Card: NextPage<Props> = ({ image, name, id }) => {
	return (
		<Link
			href={`pokemon/${id}`}
			style={blur}
			className='flex flex-col justify-center items-center  max-sm:my-2 rounded-xl border shadow-lg'
		>
			<Image src={image} alt='pokemonImg' height={130} width={130} />
			<h2 className='capitalize font-bold text-xl mb-2 text-white'>{name}</h2>
		</Link>
	);
};

export default Card;
