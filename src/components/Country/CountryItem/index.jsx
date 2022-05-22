import './index.scss';

const CountryItem = ({ item, className }) => {
	const [key] = Object.keys(item);
	const [value] = Object.values(item);

	return (
		<li className={`item ${className}`}>
			<h4 className="item__heading">{`${key}: `}</h4>
			<span className="item__value" style={item?.style}>
				{value}
			</span>
		</li>
	);
};

export default CountryItem;
