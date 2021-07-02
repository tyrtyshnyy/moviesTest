import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import './App.scss'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart/:id" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
