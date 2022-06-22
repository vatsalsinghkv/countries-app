import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countriesActions } from '../../store/countries';

import Card from '../UI/Card';

import './index.scss';

const SearchBar = () => {
  const [showClear, setShowClear] = useState(false);
  const [search, setSearch] = useState('');

  const isDark = useSelector(state => state.theme.isDark);
  const { searchCountry } = countriesActions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCountry(search.trim()));
    // Showing and hiding clear button
    search.length ? setShowClear(true) : setShowClear(false);
  }, [search, dispatch, searchCountry]);

  const searchChangeHandler = e => {
    setSearch(e.target.value);
  };

  const clearClickHandler = () => {
    setSearch('');
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
      {showClear && (
        <button className="btn cancel-btn" onClick={clearClickHandler}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      )}
    </Card>
  );
};

export default SearchBar;
