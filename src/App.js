import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import './form.js'
import './form.scss'
import $ from 'jquery'
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={'/'} exact Component={Home} />
        <Route path={'/login'} exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
