import { configureStore } from '@reduxjs/toolkit';
import dogReducer from './slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, dogReducer);

export const store = configureStore({
    reducer: {
        dogs: persistedReducer,
        devTools: process.env.NODE_ENV !== 'production',
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
