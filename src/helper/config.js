const TIMEOUT_SEC = 10;

const TOTAL_COUNTRIES = 250;

const FIELDS =
	'fields=name,capital,region,subregion,flags,population,cca3,borders,currencies,languages,tld';

const URL = 'https://restcountries.com/v3.1';

const COUNTRIES_URL = `${URL}/all?${FIELDS}`;

export { TIMEOUT_SEC, TOTAL_COUNTRIES, COUNTRIES_URL, FIELDS, URL };
