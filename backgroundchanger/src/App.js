import React from 'react';
import './App.css';
import Cluster from './Cluster';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cluster />
      </div>
    </Provider>
  );
}

export default App;
