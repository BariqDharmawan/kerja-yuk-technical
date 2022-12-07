const Menu = ({ children, className = '' }) => {
	return (
		<div
			className={`shadow-top-only p-3 bg-white z-20 ${className} w-full flex`}
		>
			{children}
		</div>
	);
};

export default Menu;
