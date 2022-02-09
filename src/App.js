import './App.css';
import Home from './home/Home'
import Syc from './syc/Syc'
import Pendiente from './pendiente/Pendiente'
import Circulo from './circulo/Circulo'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
/*https://fifthcalculators.netlify.app/*/
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Home></Home>
          </Route>
          <Route path="/syc" exact>
            <Syc></Syc> 
          </Route>
          <Route path="/pendiente">
            <Pendiente></Pendiente>
          </Route>
          <Route path="/circulo">
            <Circulo></Circulo>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
