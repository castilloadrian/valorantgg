import './../styles/Maps.css';
const axios = require('axios');

const hitMaps = () => {
    axios.get('http://localhost:8080/valcontent')
    .then((response) => {
        var i = 1;
        for(i;i<7;i++){
            console.log(response.data.maps[i].name)
        }
    })
}

const MapsScreen = () => (
    <div>
        <button type="submit" onClick={hitMaps}>Map List</button>
    </div>
);

export default MapsScreen;