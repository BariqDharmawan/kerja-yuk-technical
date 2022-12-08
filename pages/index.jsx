import Image from 'next/image';
import {
	BiCalendarAlt,
	BiCog,
	BiHomeAlt,
	BiLogOutCircle,
	BiNotepad,
	BiTime,
} from 'react-icons/bi';
import Card from '../components/Card';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import TopBar from '../components/TopBar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import BelNotif from '../components/BelNotif';
import NewsItem from '../components/NewsItem';
import PeopleInfo from '../components/PeopleInfo';

export default function Home() {
	const menuBar = [
		{
			href: '/home',
			label: 'Home',
			isCenter: false,
			icon: <BiHomeAlt size={20} />,
		},
		{
			href: '/home',
			label: 'Attendance',
			isCenter: false,
			icon: <BiCalendarAlt size={20} />,
		},
		{
			href: '/home',
			label: 'Checkout',
			isCenter: true,
			icon: <BiLogOutCircle size={28} color='#fff' />,
		},
		{
			href: '/home',
			label: 'Form',
			isCenter: false,
			icon: <BiNotepad size={20} />,
		},
		{
			href: '/home',
			label: 'Settings',
			isCenter: false,
			icon: <BiCog size={20} />,
		},
	];

	const activities = [
		{
			val: '08:30',
			isRunning: false,
			label: 'Check in',
		},
		{
			val: '03:00:00',
			isRunning: true,
			label: 'Working Hours',
		},
		{
			val: '--:--',
			isRunning: false,
			label: 'Check Out',
		},
	];

	return (
		<>
			<TopBar label='Kerja Yuk' className='justify-between'>
				<BelNotif isHaveNotif={true} />
			</TopBar>

			<main className='pb-28'>
				<div className='container mx-auto px-4 lg:px-0'>
					<section className='mb-5'>
						<h1 className='mb-3 text-lg'>Hi, Good Morning!</h1>

						<Card className='p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white'>
							<div className='flex justify-between'>
								<figure className='flex gap-2'>
									<Image
										src='/img/dummy/profile.png'
										alt='My Profile'
										quality={100}
										width={60}
										height={60}
										className='rounded-full'
									/>
									<figcaption className='flex flex-col'>
										<span className='font-bold'>Tabay</span>
										<span>UI/UX Designer</span>
									</figcaption>
								</figure>

								<div className='flex flex-col'>
									<span className='italic text-gray-200'>
										Member since
									</span>
									<span>01 Juni 2021</span>
								</div>
							</div>
							<div className='flex justify-between items-end'>
								<div className='flex flex-col'>
									<span className='text-gray-300'>
										Location
									</span>
									<span className='text-white'>
										Kantor Sahid
									</span>
								</div>

								<span className='text-gray-300'>ICD</span>
							</div>
						</Card>
					</section>

					<section className='mb-5'>
						<p className='font-bold text-lg mb-3'>
							Today's Activity
						</p>

						<div className='flex gap-3 items-center'>
							{activities.map((activity, index) => (
								<div
									className='flex flex-col items-center flex-grow'
									key={index}
								>
									<BiTime
										size={24}
										className='text-red-500'
									/>
									<span
										className={`${
											activity.isRunning
												? 'text-red-500'
												: 'text-gray-800'
										} font-bold`}
									>
										{activity.val}
									</span>
									<span>{activity.label}</span>
								</div>
							))}
						</div>
					</section>

					<section>
						<p className='font-bold text-lg'>PCS News</p>
						<Swiper
							pagination={{
								clickable: true,
								horizontalClass: 'swiper-pagination-basic',
							}}
							modules={[Pagination]}
							spaceBetween={16}
							slidesPerView={1.5}
							centeredSlides={true}
							loop={true}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
						>
							{[...Array(6)].map((_, index) => (
								<SwiperSlide key={index} className='py-6 mb-3'>
									<NewsItem />
								</SwiperSlide>
							))}
						</Swiper>
					</section>

					<section>
						<h2 className='font-bold text-lg'>Online</h2>
						<Card className='rounded-2xl'>
							<div className='flex justify-start pl-3'>
								{[...Array(8)].map((_, index) => (
									<PeopleInfo
										className={index === 7 ? 'z-10' : ''}
										peopleName='Jef'
										status='WFH'
									/>
								))}
								<div
									className='text-white font-bold bg-red-600 flex justify-center items-center 
									text-center text-xs rounded-full w-12 h-12 -ml-2'
								>
									10 <br /> more
								</div>
							</div>
						</Card>
					</section>
				</div>
			</main>

			<Menu className='fixed bottom-0'>
				{menuBar.map((menu, index) => (
					<MenuItem
						key={index}
						href={menu.href}
						icon={menu.icon}
						label={menu.label}
						classIcon={
							menu.isCenter
								? 'bg-red-500 rounded-full w-16 h-16 shadow-circle shadow-gray-400'
								: ''
						}
						className={`text-sm z-20 ${
							menu.isCenter
								? 'text-red-600 inline-flex -mt-10'
								: 'flex-grow'
						}`}
					/>
				))}
			</Menu>
		</>
	);
}
