import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Pages from './pages/pages'
import Billing from './pages/billing'
import Register from './pages/register'
import TOS from './pages/TOS'
import ForgotPassword from './pages/forgot'
import Login from './pages/login'
import Result from './pages/result'
import Room from './pages/room'

import View1 from './pages/views/view1'
import View2 from './pages/views/view2'
import View3 from './pages/views/view3'
import View4 from './pages/views/view4'
import View5 from './pages/views/view5'
import View6 from './pages/views/view6'
import View7 from './pages/views/view7'
import View8 from './pages/views/view8'
import View9 from './pages/views/view9'
import View10 from './pages/views/view10'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/view1"> 
          <View1 />
        </Route>
        <Route path="/view2"> 
          <View2 />
        </Route>
        <Route path="/view3"> 
          <View3 />
        </Route>
        <Route path="/view4"> 
          <View4 />
        </Route>
        <Route path="/view5"> 
          <View5 />
        </Route>
        <Route path="/view6"> 
          <View6 />
        </Route>
        <Route path="/view7"> 
          <View7 />
        </Route>
        <Route path="/view8"> 
          <View8 />
        </Route>
        <Route path="/view9"> 
          <View9 />
        </Route>
        <Route path="/view10"> 
          <View10 />
        </Route>
        <Route path="/pages"> 
          <Pages />
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
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
