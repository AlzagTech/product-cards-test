import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import icon from '../../images/sprite.svg';

import { setFilter, setCategory } from '../../redux/filter/slice';
import { selectProducts } from 'redux/products/selectors';
import { selectCategory, selectFilter } from 'redux/filter/selectors';

import {
  FilterLabel,
  FilterInput,
  CategoryList,
  Button,
  IconSearch,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const currentCategory = useSelector(selectCategory);

  const productsCategories = useSelector(selectProducts)
    .reduce((previousValue, product) => {
      if (!previousValue.find(item => item === product.bsr_category)) {
        previousValue.push(product.bsr_category);
      }
      return previousValue;
    }, [])
    .sort();

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const handleCategoryChange = category => {
    dispatch(setCategory(category));
  };

  return (
    <FilterLabel htmlFor="filter">
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="I'm looking for..."
      />
      <IconSearch width="24" height="24">
        <use href={icon + '#icon-search'}></use>
      </IconSearch>

      <CategoryList>
        <li>
          <Button
            className={`${currentCategory === `All` ? 'isSelected' : ''}`}
            onClick={() => handleCategoryChange('All')}
          >
            All
          </Button>
        </li>

        {productsCategories.map(category => (
          <li>
            <Button
              className={`${
                currentCategory === `${category}` ? 'isSelected' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
              key={nanoid()}
            >
              {category}
            </Button>
          </li>
        ))}
      </CategoryList>
    </FilterLabel>
  );
};
