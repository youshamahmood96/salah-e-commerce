// Dependency Imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Component Imports
import Landing from "./Landing/Landing";
import NotFound from "./NotFound";
import Cart from "./Cart/Cart";
import Navigation from './Landing/Hero/Navigation'
import Shop from "./Shop/Shop";
import About from "./Landing/About/About";
function App() {
  return (
    <>
    <Router>
    <Navigation></Navigation>
      <Switch>
        <Route exact path='/'>
          <Landing></Landing>
        </Route>
        <Route path ="/cart">
          <Cart></Cart>
        </Route>
        <Route path ="/shop">
          <Shop></Shop>
        </Route>
        <Route path ="/about">
          <About></About>
        </Route>
        <Route path ="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
  </Router>
    </>
  );
}

export default App;
