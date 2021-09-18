import './App.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header-Continer';
import Home from "./home.js";
import LoaderGeneral from './Loaders/loader-general-content';

function App() {

  return (
    <Header>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/loader'>
              <LoaderGeneral></LoaderGeneral>
            </Route>
          </Switch>
        </Router>
    </Header>
  );
}

export default App;
