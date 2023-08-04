import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
        let newVal = state.counter + 1
        console.log(state.counter)
        console.log(newVal)
      return {
        counter: state.counter,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "five":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "toggle_counter":
      return {
        counter: state.counter,
        showCounter: !state.showCounter
      };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
