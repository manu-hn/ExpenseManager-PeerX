import React from 'react';
import { Provider } from "react-redux";
import Body from "./components/Body.jsx";
import store from "./redux/store.jsx";

const App = () => {
 
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  )
}

export default App