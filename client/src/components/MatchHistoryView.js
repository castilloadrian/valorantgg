import './../styles/Skins.css';
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
  
const MatchHistoryView = () => (
    <div class="whole3">
       <button type="submit" onClick={getMatchHistory}>View Match History</button>
    </div>
);

export default MatchHistoryView;