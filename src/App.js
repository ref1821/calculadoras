import './App.css';
import Home from './home/Home'
import Syc from './syc/Syc'
import Pendiente from './pendiente/Pendiente'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
/*https://fifthcalculators.netlify.app/*/
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/syc">
            <Syc></Syc> 
          </Route>
          <Route path="/pendiente">
            <Pendiente></Pendiente>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
