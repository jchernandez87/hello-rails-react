import { createStore } from 'redux'

const initialState = {
  things: []
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    default:
      return store
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState)
  return store;
}
