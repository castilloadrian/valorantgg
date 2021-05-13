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
import MatchHistory from './MatchHistory'
import MatchHistoryView from './MatchHistoryView'
import Jett from './agents/Jett'
import Sage from './agents/Sage'
import Sova from './agents/Sova'
import Brimstone from './agents/Brimstone'
import Astra from './agents/Astra'
import Breach from './agents/Breach'
import Cypher from './agents/Cypher'
import Killjoy from './agents/Killjoy'
import Omen from './agents/Omen'
import Pheonix from './agents/Pheonix'
import Raze from './agents/Raze'
import Reyna from './agents/Reyna'
import Skye from './agents/Skye'
import Viper from './agents/Viper'
import Yoru from './agents/Yoru'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Agents" exact component={Agent}/>
        <Route path="/Maps" exact component={Maps}/>
        <Route path="/Leaderboard" component={Leaderboard}/>
        <Route path="/Skins" component={Skins}/>
        <Route path="/Maps/Ascent" component={Ascent}/>
        <Route path="/Maps/Haven" component={Haven}/>
        <Route path="/Maps/Icebox" component={Icebox}/>
        <Route path="/Maps/Bind" component={Bind}/>
        <Route path="/Maps/Split" component={Split}/>
        <Route path="/Riot" component={Riot}/>
        <Route path="/InputMatches" component={MatchHistory}/>
        <Route path="/MatchHistory" component={MatchHistoryView}/>
        <Route path="/Agents/Jett" component={Jett}/>
        <Route path="/Agents/Sage" component={Sage}/>
        <Route path="/Agents/Sova" component={Sova}/>
        <Route path="/Agents/Brimstone" component={Brimstone}/>
        <Route path="/Agents/Astra" component={Astra}/>
        <Route path="/Agents/Breach" component={Breach}/>
        <Route path="/Agents/Cypher" component={Cypher}/>
        <Route path="/Agents/Killjoy" component={Killjoy}/>
        <Route path="/Agents/Omen" component={Omen}/>
        <Route path="/Agents/Pheonix" component={Pheonix}/>
        <Route path="/Agents/Raze" component={Raze}/>
        <Route path="/Agents/Reyna" component={Reyna}/>
        <Route path="/Agents/Skye" component={Skye}/>
        <Route path="/Agents/Viper" component={Viper}/>
        <Route path="/Agents/Yoru" component={Yoru}/>
      </Switch>
    </Router>
  );
}

export default App;