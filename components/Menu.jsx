const Menu = ({ children, className = '' }) => {
	return (
		<div
			className={`bg-white p-3 shadow-2xl shadow-gray-500 border border-gray-200 ${className} w-full`}
		>
			{children}
		</div>
	);
};

export default Menu;
