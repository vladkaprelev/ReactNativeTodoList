import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/CreateStore';
import NavigationService from './src/Navigation/NavigationService';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationService />
    </Provider>
  );
};

export default App;
