import { useDispatch, useSelector } from 'react-redux';
import { countriesActions } from '../../store/countries';
import { searchActions } from '../../store/search';
import Card from '../UI/Card';

import './index.scss';

const SearchBar = () => {
	const isDark = useSelector(state => state.theme.isDark);
	const search = useSelector(state => state.search.value);
	const { searchCountry } = countriesActions;
	const { setSearch } = searchActions;
	const dispatch = useDispatch();

	const searchChangeHandler = e => {
		dispatch(setSearch(e.target.value));

		if (e.target.value.trim() === '') {
			return;
		}

		dispatch(searchCountry(e.target.value.trim()));
	};

	return (
		<Card className="search-bar">
			{isDark || <ion-icon name="search-sharp" />}
			{isDark && <ion-icon name="search-sharp" className="dark" />}
			<input
				className="search-bar__input"
				type="text"
				name="search"
				placeholder="Search for a country..."
				value={search}
				onChange={searchChangeHandler}
			/>
		</Card>
	);
};

export default SearchBar;
