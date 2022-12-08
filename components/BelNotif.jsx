import Link from 'next/link';
import { BiBell } from 'react-icons/bi';

const BelNotif = ({ className, isHaveNotif = false }) => {
	return (
		<Link href={'/notification'} className={`relative ${className}`}>
			<BiBell size={20} />
			{isHaveNotif && (
				<span className='w-1 h-1 rounded-full bg-red-500 inline-flex absolute top-0 right-0'></span>
			)}
		</Link>
	);
};

export default BelNotif;
