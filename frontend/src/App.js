import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/store';

import Login from './view/login';
import NewUser from './view/newUser';
import Home from './view/home';
import NewWhisky from './view/newWhisky';
import Detalhes from './view/detalhes';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/newuser' component={NewUser} />
          <Route exact path='/newwhisky' component={NewWhisky} />
          <Route path='/detalhes/:idWhisky' component={Detalhes} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;