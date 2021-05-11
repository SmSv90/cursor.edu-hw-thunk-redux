import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getUsersReducer } from "./redux/get-users-reducer";
import { addUserReducer } from "./redux/add-user-reducer";
import { userInputValueReducer } from "./redux/user-value-reducer";


const reducer = combineReducers({
  getUsersReducer,
  userInputValueReducer,
  addUserReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;