import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import SingleMeal from './pages/SingleMeal';
import Error from './pages/Error';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/meals/:id">
            <SingleMeal/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
