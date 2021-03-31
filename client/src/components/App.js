import './../styles/App.css';
import Home from './Home';
import Agent from './Agents';
import Maps from './Maps';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Agents" component={Agent}/>
        <Route path="/Maps" component={Maps}/>
      </Switch>
    </Router>
  );
}

export default App;