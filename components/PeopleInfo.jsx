import Image from 'next/image';

const PeopleInfo = ({ peopleName, status, className = '' }) => {
	return (
		<figure
			className={`${className} flex flex-col items-center`}
			style={{
				marginLeft: `-10px`,
			}}
		>
			<Image
				src='/img/dummy/profile.png'
				height={48}
				width={48}
				className={`border-2 border-white rounded-full`}
				alt='Online People'
			/>
			<figcaption className='text-center'>
				<span className='block text-black'>{peopleName}</span>
				<small className='text-gray-800'>{status}</small>
			</figcaption>
		</figure>
	);
};

export default PeopleInfo;
