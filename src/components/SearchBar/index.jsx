import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countriesActions } from '../../store/countries';
import { searchActions } from '../../store/search';
import Card from '../UI/Card';

import './index.scss';

const SearchBar = () => {
  const [showClear, setShowClear] = useState(false);
  const isDark = useSelector(state => state.theme.isDark);
  const search = useSelector(state => state.search.value);
  const { searchCountry } = countriesActions;
  const { setSearch, clearSearch } = searchActions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCountry(search.trim()));
    // Showing and hiding clear button
    search.length ? setShowClear(true) : setShowClear(false);
  }, [search, dispatch, searchCountry]);

  const searchChangeHandler = e => {
    dispatch(setSearch(e.target.value));
  };

  const clearClickHandler = () => {
    dispatch(clearSearch());
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
