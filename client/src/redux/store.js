import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import sessionReducer from "../redux/session/sessionReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"]
};

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, sessionReducer)
});

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
