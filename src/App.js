import './App.css';
import Navbar from './componets/Navbar';
import Menu from './componets/Home';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Gallery from './componets/Gallery';
import Burgers from './componets/menu/burger';
import Fries from './componets/menu/fries';
import Juices from './componets/menu/juices';
import Home from './componets/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Navbar />


      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/burgers">
            <Burgers />
          </Route>
          <Route path="/fries">
            <Fries />
          </Route>
          <Route path="/juices">
            <Juices />
          </Route>
          <Route path="/service">

          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
