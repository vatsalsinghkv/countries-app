import { useNavigate } from 'react-router-dom';
import { getId, numberFormatter } from '../../../helper';
import CountryItem from '../CountryItem';
import Card from '../../UI/Card';
import './index.scss';

const CountryCard = ({ id, img, name, population, region, capital }) => {
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(id);
	};

	const countryDetails = [
		{ population: numberFormatter(population) },
		{ region },
		{ capital },
	];

	return (
		<Card figure={true} onClick={clickHandler} className="country">
			<img src={img} alt={`${name} flag`} className="country__flag" />
			<figcaption className="country__figcaption">
				<h2 className="country__name">{name}</h2>
				<ul className="country-info">
					{countryDetails.map(country => (
						<CountryItem key={getId()} item={country} />
					))}
				</ul>
			</figcaption>
		</Card>
	);
};

export default CountryCard;
