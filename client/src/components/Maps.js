import React, {useState, useEffect} from 'react';
import './../styles/Maps.css';
const axios = require('axios');



// const hitMaps = () => {
//     axios.get('http://localhost:8080/valcontent')
//     .then((response) => {
//         var i = 1;
//         for(i;i<7;i++){
//             console.log(response.data.maps[i].name)
//         }
//     })
// }

const MapsScreen = () => (

<table>
  <tr>
    <td>
        <img src="https://cdn1.dotesports.com/wp-content/uploads/2020/09/16094045/EZddUWTWAAAf3nV.jpg" alt="failed to load"></img>
        <br></br>Ascent
    </td>
    <td>
        <img src="https://fortskins.org/wp-content/uploads/2020/07/bind-valorant-map-f-1024x597.jpg" alt="failed to load"></img>
        <br></br>Bind
    </td>
    <td>
        <img src="https://fortskins.org/wp-content/uploads/2020/07/Haven-Valorant-Map-f.jpg" alt="failed to load"></img>
        <br></br>Haven
    </td>
  </tr>
  <tr>
    <td>
        <img src="https://www.dailyesports.gg/wp-content/uploads/2020/10/960x0-1.jpg" alt="failed to load"></img>
        <br></br>Icebox
    </td>
    <td>
        <img src="https://static.wikia.nocookie.net/valorant/images/d/d6/Loading_Screen_Split.png" alt="failed to load"></img>
        <br></br>Split
    </td>
  </tr>
  
</table>

);


export default MapsScreen;