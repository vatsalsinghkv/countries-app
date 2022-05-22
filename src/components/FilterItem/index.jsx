import './index.scss';

const FilterItem = ({ value }) => {
  return (
    <>
      <input
        type="radio"
        name="region"
        id={value}
        value={value}
        className="filter__input"
      />
      <label className="filter__label" htmlFor={value}>
        {value}
      </label>
    </>
  );
};

export default FilterItem;
