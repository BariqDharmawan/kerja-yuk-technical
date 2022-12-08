import Image from 'next/image';
import Card from './Card';

const NewsItem = () => {
	return (
		<Card className='shadow-gray-300 border border-gray-200 rounded-xl'>
			<div className='flex items-center gap-2'>
				<div className='flex gap-2 w-8/12'>
					<div className='w-10 h-10 rounded-full overflow-hidden relative'>
						<Image
							src='/img/dummy/profile.png'
							fill={true}
							quality={100}
							alt='Slider'
						/>
					</div>
					<div className='text-orange-600 font-bold text-sm overflow-clip break-words'>
						Ana Rismawati
					</div>
				</div>
				<div className='text-xs text-end w-4/12'>
					<span className='block'>Senin</span>
					<time dateTime='30-05-2022'>30 Mei 2022</time>
				</div>
			</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</Card>
	);
};

export default NewsItem;
