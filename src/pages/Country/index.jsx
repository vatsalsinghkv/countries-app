import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getId, numberFormatter, parseObjValues } from '../../helper';
import useHttp from '../../hooks/use-http';
import { countriesActions } from '../../store/countries';
import CountryItem from '../../components/Country/CountryItem';

import LinkButton from '../../components/UI/LinkButton';
import Spinner from '../../components/UI/Spinner';

import './index.scss';
import NotFound from '../NotFound';

const CountryDetails = () => {
	const country = useSelector(state => state.countries.active);
	const { setCountry } = countriesActions;
	const { isLoading, sendRequest } = useHttp();
	const { countryId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const c = useSelector(state =>
		state.countries.all.find(
			country => country.cca3.toLowerCase() === countryId.toLocaleLowerCase()
		)
	);

	useEffect(() => {
		if (c) {
			dispatch(setCountry(c));
			return;
		}

		const getData = data => dispatch(setCountry(data));

		sendRequest(
			`https://restcountries.com/v3.1/alpha/${countryId}?fields=name,capital,region,subregion,flags,population,cca3,borders,currencies,languages,tld`,
			getData
		);
	}, [sendRequest, countryId, dispatch, c, setCountry]);

	const {
		name,
		capital,
		region,
		subregion,
		flags,
		population,
		borders,
		currencies,
		languages,
		tld,
	} = country;

	const leftCountryItems = [
		{ 'native name': parseObjValues(name?.nativeName, 'common') },
		{ population: numberFormatter(population) },
		{ region },
		{ 'sub region': subregion },
		{ capital },
	];

	const rightCountryItems = [
		{ 'top level domain': tld, style: { textTransform: 'lowercase' } },
		{ currencies: parseObjValues(currencies, 'name') },
		{ languages: parseObjValues(languages, '', 1) },
	];

	const border = {
		borders:
			borders &&
			borders.map(border => (
				<LinkButton key={getId()} to={`/${border}`}>
					{border}
				</LinkButton>
			)),
	};

	return (
		<div className="country-details">
			{isLoading && <Spinner />}
			{!country && !isLoading && <NotFound />}

			{country && !isLoading && (
				<>
					<LinkButton
						type="button"
						onClick={() => navigate(-1)}
						className="country-details__btn"
					>
						<ion-icon name="arrow-back-outline" />
						Back
					</LinkButton>

					<main className="country-details__main">
						<img
							src={flags.svg}
							alt={`${name.common} flag`}
							className="country-details__flag"
						/>

						<div className="country-details__content">
							<h1 className="country-details__name">{name.common}</h1>

							<div className="country-info country-info--lg">
								<div className="country-info__container">
									<div className="country-info__left">
										{leftCountryItems.map(item => (
											<CountryItem
												key={getId()}
												item={item}
												style={item?.style}
											/>
										))}
									</div>
									<div className="country-info__right">
										{rightCountryItems.map(item => (
											<CountryItem key={getId()} item={item} />
										))}
									</div>
								</div>
								{borders.length ? (
									<CountryItem
										item={border}
										className="country-details__border"
									/>
								) : (
									''
								)}
							</div>
						</div>
					</main>
				</>
			)}
		</div>
	);
};

export default memo(CountryDetails);
