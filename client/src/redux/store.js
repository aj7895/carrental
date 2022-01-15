import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { carsReducer } from "./reducers/carsReducer.js";
import { alertsReducer } from "./reducers/alertsReducer.js";
import { bookingsReducer } from "./reducers/bookingsReducer.js";
import { usersReducer } from "./reducers/usersReducer.js";

const composeEnhancers = composeWithDevTools({});

// root reducer
const rootReducer = combineReducers({
  carsReducer,
  alertsReducer,
  bookingsReducer,
  usersReducer,
});

// store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
