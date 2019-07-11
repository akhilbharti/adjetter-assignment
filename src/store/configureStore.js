import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/";
import reduxThunk from "redux-thunk";

//redux dev tool integration
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(reduxThunk))
  );
}
