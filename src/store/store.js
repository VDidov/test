import { createStore, combineReducers , applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { usersReducer} from "./reducers/usersReducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  usersList: usersReducer,
});

const initialState = {
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
