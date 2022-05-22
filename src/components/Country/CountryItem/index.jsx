const CountryItem = ({ item, className }) => {
  const [key] = Object.keys(item);
  const [value] = Object.values(item);

  return (
    <li className={`item ${className}`}>
      <h3 className="item__heading">{`${key}: `}</h3>
      <span className="item__value" style={item?.style}>
        {value}
      </span>
    </li>
  );
};

export default CountryItem;
