import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { get } from 'mongoose';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer=combineReducers({
  user: userReducer,
});

const persistConfig = {
    key:'root',
    storage,
    version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
}) ;

export const persistor = persistStore(store);