import Image from 'next/image';
import Link from 'next/link';
import { BiArrowBack, BiCheck, BiRightArrowAlt, BiX } from 'react-icons/bi';
import TopBar from '../components/TopBar';

const Notification = () => {
	const oldNotif = [
		{
			label: 'Reimbursment',
			isNotRead: true,
			icon: <BiCheck />,
			status: 1,
			desc: 'Lorem ipsum dolor sit "amet consectetur adipisicing elit". Omnis illum <b>sapiente</b> dolore non mollitia nam quibusdam odio corrupti tempora distinctio?',
		},
		{
			isNotRead: false,
			label: 'Reimbursment',
			icon: <BiX />,
			status: 3,
			desc: 'Lorem ipsum dolor sit "amet consectetur adipisicing elit". Omnis illum <b>sapiente</b> dolore non mollitia nam quibusdam odio corrupti tempora distinctio?',
		},
		{
			isNotRead: true,
			label: 'Reimbursment',
			icon: <BiRightArrowAlt />,
			status: 2,
			desc: 'Lorem ipsum dolor sit "amet consectetur adipisicing elit". Omnis illum <b>sapiente</b> dolore non mollitia nam quibusdam odio corrupti tempora distinctio?',
		},
	];
	return (
		<>
			<TopBar
				label='Notification'
				className='flex-row-reverse justify-end gap-4 shadow-md shadow-gray-300'
			>
				<Link href={'/'}>
					<BiArrowBack size={22} />
				</Link>
			</TopBar>

			<main>
				<div className='container mx-auto'>
					{oldNotif.map((notif, index) => (
						<div
							className={`flex gap-4 items-start p-5 ${
								notif.isNotRead
									? 'bg-blue-300 bg-opacity-30'
									: 'bg-white'
							}`}
							key={index}
						>
							<div className='relative bg-red-600 rounded-md'>
								<Image
									src={'/img/dummy/drugs.png'}
									height={150}
									width={150}
									alt={notif.label}
								/>
								<span
									className={`absolute text-white right-0 bottom-0 rounded-full 
									translate-x-1/4 translate-y-1/4 p-1
										${
											notif.status === 1
												? 'bg-green-500'
												: notif.status == 2
												? 'bg-red-400'
												: 'bg-blue-600'
										}
									`}
								>
									{notif.icon}
								</span>
							</div>
							<div>
								<p className='text-lg font-bold'>
									{notif.label}
								</p>
								<p
									dangerouslySetInnerHTML={{
										__html: notif.desc,
									}}
								></p>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default Notification;
