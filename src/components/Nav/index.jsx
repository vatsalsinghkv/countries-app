import { memo } from 'react';
import Filter from '../Filter';
import SearchBar from '../SearchBar';
import './index.scss';

const Nav = () => {
  return (
    <nav>
      <form
        autoComplete="off"
        onSubmit={e => e.preventDefault()}
        className="form"
      >
        <SearchBar />
        <Filter />
      </form>
    </nav>
  );
};

export default memo(Nav);
