import { FIELDS, URL } from './config';

/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = () => `id${Math.random().toString(16).slice(2)}`;

/**
 * Format the number according to country's standards
 * @param {number} value Number which should be formatted
 * @returns {number} Number formatted according to the user's country
 */

export const numberFormatter = value => {
	return new Intl.NumberFormat(navigator.language).format(value);
};

/**
 * Returns a rejected Promise after given seconds
 * @async
 * @param {number} sec - How much time before rejecting promise
 * @returns {Promise} Settled (Rejected) Promise
 */

export const timeout = async function (sec) {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error(`Request took too long! Timeout after ${sec} second`));
		}, sec * 1000);
	});
};

/**
 * Convert array into string by joining array elements with comma
 * @param {array} arr array of elements
 * @returns {String}
 * @example ['a', 'b', 'c'] => 'a, b, c'
 */

export const arrToStr = arr => arr.join(', ');

/**
 * Parse data in string from nested objects
 * @param {String} prop Property name which you want
 * @param {String} value Nested key value of the property
 * @param {Number} [1, default = 2] level upto which element is nested
 * @returns {String}
 * @example prop='nativeName', value='common', level=2
 *  "nativeName": {
                "grn": {
                    "official": "Tetã Paraguái",
                    "common": "Paraguái"
                },
                "spa": {
                    "official": "República de Paraguay",
                    "common": "Paraguay"
                }
            } => 'Paraguái, Paraguay'
 */

export const parseObjValues = (prop, value = '', level = 2) => {
	let values = [];

	if (level === 1) {
		for (const key in prop) {
			values.push(prop[key]);
		}

		return arrToStr(values);
	}

	for (const key in prop) {
		values.push(prop[key][value]);
	}

	return arrToStr(values);
};

/**
 * Get country's url from rest api
 * @param {String} countryId
 * @returns {String} URL (Api)
 */

export const getCountryURL = countryId => {
	return `${URL}/alpha/${countryId}?${FIELDS}`;
};
