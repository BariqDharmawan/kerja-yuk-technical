const Card = ({ className = '', children }) => {
	return (
		<div className={`bg-white shadow-md rounded-sm p-3 ${className}`}>
			{children}
		</div>
	);
};

export default Card;
