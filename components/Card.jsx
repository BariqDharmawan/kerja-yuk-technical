const Card = ({ className = '', children }) => {
	return (
		<div
			className={`bg-white shadow-md ${
				!className.includes('rounded') ? 'rounded' : ''
			} p-3 ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
