import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import {AsyncStorage} from "react-native";

const persistConfig = {
    key: 'root',
    storage : AsyncStorage
};

const persistedReducer = persistReducer(persistConfig)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)
export default store;
