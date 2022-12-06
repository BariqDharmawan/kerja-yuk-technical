import Link from 'next/link';
import { BiCalendarAlt, BiHomeAlt } from 'react-icons/bi';

import Menu from '../components/Menu';
import TopBar from '../components/TopBar';

export default function Home() {
	return (
		<>
			<TopBar>Kerja Yuk</TopBar>
			<section>Content</section>
			<Menu className='fixed bottom-0'>
				<div className='container flex'>
					<Link href='/home'>
						<BiHomeAlt />
					</Link>
					<Link href='/home'>
						<BiCalendarAlt />
					</Link>
				</div>
			</Menu>
		</>
	);
}
