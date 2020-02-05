import React from 'react';
import GameContainer from './containers/gamecontainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer());

function App() {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  );
}

export default App;
