import './../styles/Agents.css';
// const axios = require('axios');

// const hitCharacters = () => {
//     axios.get('http://localhost:8080/valcontent')
//     .then((response) => {
//         var i = 0;
//         for(i;i<16;i++){
//             console.log(response.data.characters[i].name)
//         }
//     })
// }

const AgentScreen = () => (
    <div class="whole">
        <div class="row">
            <div class="column">
                <img src="https://static.invenglobal.com/upload/image/2021/02/27/o1614449790943127.jpeg" class="character" alt=""></img>
                <h1 class="charactertext">Astra</h1>
            </div>
            <div class="column">
            <img src="https://assets.gamepur.com/wp-content/uploads/2020/09/01113302/valorant-guide-breach.png" class="character" alt=""></img>
                <h1 class="charactertext">Breach</h1>
            </div>
            <div class="column">
            <img src="https://static.invenglobal.com/upload/image/2020/05/04/o1588624507570631.jpeg" class="character" alt=""></img>
                <h1 class="charactertext">Brimstone</h1>
            </div>
        </div>
        <br></br>
        <div class="row">
            <div class="column">
                <img src="https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/07/cypher.jpg" class="character" alt=""></img>
                <h1 class="charactertext">Cypher</h1>
            </div>
            <div class="column">
            <img src="https://static.invenglobal.com/upload/image/2020/04/02/i1585819016848035.jpeg" class="character" alt=""></img>
                <h1 class="charactertext">Jett</h1>
            </div>
            <div class="column">
            <img src="https://i.ytimg.com/vi/ua-iIRQDY8g/maxresdefault.jpg" class="character" alt=""></img>
                <h1 class="charactertext">Killjoy</h1>
            </div>
        </div>
        <br></br>
        <div class="row">
            <div class="column">
                <img src="https://wallpapercave.com/wp/wp6423303.jpg" class="character" alt=""></img>
                <h1 class="charactertext">Omen</h1>
            </div>
            <div class="column">
            <img src="https://i.imgur.com/AXzXE9P.png" class="character" alt=""></img>
                <h1 class="charactertext">Pheonix</h1>
            </div>
            <div class="column">
            <img src="https://i.imgur.com/EASU0a5.jpg" class="character" alt=""></img>
                <h1 class="charactertext">Raze</h1>
            </div>
        </div>
        <br></br>
        <div class="row">
            <div class="column">
                <img src="https://i.imgur.com/puAoRHx.png" class="character" alt=""></img>
                <h1 class="charactertext">Reyna</h1>
            </div>
            <div class="column">
            <img src="https://i.imgur.com/wZE2918.png" class="character" alt=""></img>
                <h1 class="charactertext">Sage</h1>
            </div>
            <div class="column">
            <img src="https://wallpapercave.com/wp/wp7984691.png" class="character" alt=""></img>
                <h1 class="charactertext">Skye</h1>
            </div>
        </div>
        <br></br>
        <div class="row">
            <div class="column">
                <img src="https://wallpapercave.com/wp/wp6489850.jpg" class="character" alt=""></img>
                <h1 class="charactertext">Sova</h1>
            </div>
            <div class="column">
            <img src="https://wallpapercave.com/wp/wp6477714.png" class="character" alt=""></img>
                <h1 class="charactertext">Viper</h1>
            </div>
            <div class="column">
            <img src="https://artfiles.alphacoders.com/138/138201.png" class="character" alt=""></img>
                <h1 class="charactertext">Yoru</h1>
            </div>
        </div>
    </div>
);

export default AgentScreen;