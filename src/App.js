import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header-Continer';
import Home from "./home.js";
import NotFound404 from './notFoundsPages/general-page-not-found';

function App() {

  return (
    <Header>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='*'>
              <NotFound404/>
            </Route>
          </Switch>
        </Router>
    </Header>
  );
}

export default App;
