import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview } from '../../components/categories-preview/CategoriesPreview';
import { CategoryProducts } from '../category-products/CategoryProducts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import { selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import { Spinner } from '../../components/spinner/Spinner';

export default function Shop() {
  const dispatch = useDispatch();
  const categoriesLoading: boolean = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        index
        element={categoriesLoading ? <Spinner /> : <CategoriesPreview />}
      />
      <Route
        path=':category'
        element={categoriesLoading ? <Spinner /> : <CategoryProducts />}
      />
    </Routes>
  );
}
