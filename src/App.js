import './App.css';
import Home from './home/Home'
import Syc from './syc/Syc'
import Pendiente from './pendiente/Pendiente'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/syc">
            <Syc></Syc>
          </Route>
          <Route exact path="/pendiente">
            <Pendiente></Pendiente>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
