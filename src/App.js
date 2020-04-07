import React from "react";
import { Provider } from 'react-redux'
import Routes from "./routes"
import store from './redux/reducer'
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;

