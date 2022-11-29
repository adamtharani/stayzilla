import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Billing from './pages/billing'
import Register from './pages/register'
import TOS from './pages/TOS'
import ForgotPassword from './pages/forgot'
import Login from './pages/login'
import Notes from './pages/notes'
import Create from './pages/create'
import Result from './pages/result'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pages"> 
          <Billing />
        </Route>
        <Route path="/billing"> 
          <Billing />
        </Route>
        <Route path="/forgot"> 
          <ForgotPassword />
        </Route>
        <Route path="/TOS"> 
          <TOS />
        </Route>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/register"> 
          <Register />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
