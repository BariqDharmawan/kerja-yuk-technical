const TopBar = ({ children, label, className = '' }) => {
	return (
		<div
			className={`${className} flex justify-between px-3 py-7 items-center`}
		>
			<span className='font-nerko-one text-red-500 text-2xl font-bold'>
				{label}
			</span>
			{children}
		</div>
	);
};

export default TopBar;
