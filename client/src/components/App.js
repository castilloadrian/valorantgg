import './../styles/App.css';
import Home from './Home';
import Agent from './Agents';
import Maps from './Maps';
import Nav from './NavBar'
import Skins from './Skins'
import Leaderboard from './Leaderboard'
import Ascent from './Ascent'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Agents" component={Agent}/>
        <Route path="/Maps" exact component={Maps}/>
        <Route path="/Leaderboard" component={Leaderboard}/>
        <Route path="/Skins" component={Skins}/>
        <Route path="/Maps/Ascent" component={Ascent}/>
      </Switch>
    </Router>
  );
}

export default App;