import React from "react";
import Redux from "redux";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore()
  window.state = store.getState
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"))
})
