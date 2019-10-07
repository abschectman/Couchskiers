import React from "react";
import Redux from "redux";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"



document.addEventListener("DOMContentLoaded", ()=>{
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { currentUser: id }
    };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  window.state = store.getState
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"))
})
