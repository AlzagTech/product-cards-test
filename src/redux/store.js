import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { productsReducer } from './products/slice';
import { categorySlice, filterSlice } from './filter/slice';

const productsPersistConfig = {
  key: 'products',
  storage,
};

export const store = configureStore({
  reducer: {
    products: persistReducer(productsPersistConfig, productsReducer),
    filter: filterSlice.reducer,
    currentCategory: categorySlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
