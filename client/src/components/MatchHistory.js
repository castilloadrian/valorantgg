import './../styles/MatchHistory.css';

const getValues = () => {
    var kills = document.getElementById("kills").value;
    var deaths = document.getElementById("deaths").value;
    var assists = document.getElementById("assists").value;
    var fb = document.getElementById("fb").value;
    var fd = document.getElementById("fd").value;

    console.log(kills,assists,deaths,fb,fd);
}

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
            <label>First Deaths: </label><br></br>
            <input type="text" id="fd" name="fd"></input><br></br>
            <button type="button"  onClick={getValues}>Upload</button>
      </form>
    </div>
);

export default MatchHistory;