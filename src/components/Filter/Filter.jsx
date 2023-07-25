import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import icon from '../../images/sprite.svg';

import { setFilter, setCategory } from '../../redux/filter/slice';
import { selectProducts } from 'redux/products/selectors';
import {
  selectCategory,
  selectFilter,
  selectVisibleProducts,
} from 'redux/filter/selectors';

import {
  FilterLabel,
  FilterInput,
  CategoryList,
  Button,
  IconSearch,
  CategoryBox,
  CategoryBtn,
  CategoryBtnBox,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const currentCategory = useSelector(selectCategory);
  const [isOpen, setIsOpen] = useState(false);

  const visibleProducts = useSelector(selectVisibleProducts);
  const visibleProductsLength = visibleProducts.length;

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

  const onCategoryBtnClick = () => {
    setIsOpen(!isOpen);
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

      {visibleProductsLength ? (
        <>
          <CategoryBtnBox>
            <CategoryBtn
              className={isOpen ? 'opened' : ''}
              onClick={onCategoryBtnClick}
            >
              {isOpen ? 'Hide categories' : 'Show categories'}
              <svg width="24" height="24">
                <use href={icon + '#icon-chevron-down'}></use>
              </svg>
            </CategoryBtn>
          </CategoryBtnBox>

          <CategoryBox className={isOpen ? 'isOpen' : ''}>
            <CategoryList>
              <li key={nanoid()}>
                <Button
                  className={`${currentCategory === `All` ? 'isSelected' : ''}`}
                  onClick={() => handleCategoryChange('All')}
                >
                  All
                </Button>
              </li>

              {productsCategories.map(category => (
                <li key={nanoid()}>
                  <Button
                    className={`${
                      currentCategory === `${category}` ? 'isSelected' : ''
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </CategoryList>
          </CategoryBox>
        </>
      ) : (
        ''
      )}
    </FilterLabel>
  );
};
