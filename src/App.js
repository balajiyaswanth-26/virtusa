
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Notfound from './components/Notfound';
import Product from './page/Product';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/shop' component={Product} exact />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
