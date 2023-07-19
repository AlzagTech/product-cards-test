import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      {/* <p>Find products by name...</p> */}
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="I'm looking for..."
      />
    </FilterLabel>
  );
};
