import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
