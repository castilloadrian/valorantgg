import './../styles/MatchHistory.css';

const MatchHistory = () => (
    <div class="whole21">
      <form class="matchform">
            <label>Kills: </label><br></br>
            <input type="text" id="kills" name="kills"></input><br></br>
            <label>Deaths: </label><br></br>
            <input type="text" id="deaths" name="deaths"></input><br></br>
            <label>Assists: </label><br></br>
            <input type="text" id="assists" name="assists"></input><br></br>
            <label>First Bloods: </label><br></br>
            <input type="text" id="fb" name="fb"></input><br></br>
            <label>Opening Kills: </label><br></br>
            <input type="text" id="fd" name="fd"></input><br></br>
            <button type="button">Upload</button>
      </form>
    </div>
);

export default MatchHistory;