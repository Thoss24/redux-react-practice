import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth_slice'
import counterReducer from "./counter_slice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
  });

  export default store