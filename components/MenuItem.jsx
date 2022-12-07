import Link from 'next/link';

const MenuItem = ({
	href,
	icon,
	label,
	isActive = false,
	className = '',
	classIcon = '',
}) => {
	return (
		<Link
			href={href}
			className={`${className} flex flex-col items-center justify-center ${
				isActive ? 'text-red-500' : 'text-gray-500'
			}`}
		>
			<span className={`${classIcon} flex items-center justify-center`}>
				{icon}
			</span>
			<span>{label}</span>
		</Link>
	);
};

export default MenuItem;
