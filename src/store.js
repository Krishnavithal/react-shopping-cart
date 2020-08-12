// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import thunk from "redux-thunk";
// import { productsReducer } from "./reducers/productsReducer";

// const initialState = {};

// const composeEnhancer = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //to send all info about redux store to chrome redux devtools
// const store = createStore(
//   combineReducers({
//     products: productsReducer,
//   }),
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );
// export default store;
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";
// import { cartReducer } from "./reducers/cartReducers";
// import { orderReducer } from "./reducers/orderReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    // cart: cartReducer,
    // order: orderReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
