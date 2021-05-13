import './../styles/MatchHistory.css';
const axios = require('axios');

const getMatchHistory = () => {
  axios.get('http://localhost:8080/matchhistory')
  .then((response) => {
      var i = 0;
      for(i; i < response.data.length; i++){
        console.log(response.data[i]);
      }
  })
}

const postMatchHistory = () => {
  var kills = document.getElementById("kills").value;
  var deaths = document.getElementById("deaths").value;
  var assists = document.getElementById("assists").value;
  var fb = document.getElementById("fb").value;
  var fd = document.getElementById("fd").value;

  axios({
    method: 'post',
    url: 'http://localhost:8080/matchhistory',
    data: {
      kills: kills,
      deaths: deaths,
      assists: assists,
      fb: fb,
      fd: fd
    }
  });
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
            <button type="button"  onClick={getMatchHistory}>Upload</button>
      </form>
    </div>
);

export default MatchHistory;