import './../styles/App.css';
import Home from './Home';
import Agent from './Agents';
import Maps from './Maps';
import Nav from './NavBar'
import Skins from './Skins'
import Leaderboard from './Leaderboard'
import Ascent from './Ascent'
import Haven from './Haven'
import Icebox from './Icebox'
import Bind from './Bind'
import Split from './Split'
import Riot from './Riot'
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
        <Route path="/Maps/Haven" component={Haven}/>
        <Route path="/Maps/Icebox" component={Icebox}/>
        <Route path="/Maps/Bind" component={Bind}/>
        <Route path="/Maps/Split" component={Split}/>
        <Route path="/Riot" compent={Riot}/>


      </Switch>
    </Router>
  );
}

export default App;