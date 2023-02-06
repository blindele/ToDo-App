import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {legacy_createStore } from "redux";
import rootReducers from "./reducers";

const persistConfig = {
    key:'persist-root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducers)
const store = legacy_createStore(persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    export const persistor = persistStore(store)

    export default store;