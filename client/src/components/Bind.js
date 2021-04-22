import './../styles/Bind.css';

function BindScreen() {
   return (
    <div class="whole9">
        BIND
        <br></br><hr></hr><br></br>
        <div>
            <img src="https://cdn1.dotesports.com/wp-content/uploads/2020/04/14123321/Screenshot-8-768x720.png" class="bindmap"></img>
        </div>
        <br></br>
        <table class="table">
            <tr>
                <th>Map Callouts:</th>
                <th>Best Agents:</th>
                <th>Winrates:</th>
            </tr>
            <tr>
                <td>
                    <ul class="list">
                        <li>A site</li>
                        <li>B site</li>
                        <li>Triple</li>
                        <li>U-Hall / Lamps</li>
                        <li>A Short</li>
                        <li>Showers</li>
                        <li>Heaven</li>
                        <li>Pipes</li>
                        <li>Halls</li>
                        <li>Elbow</li>
                        <li>Garden / Octagon</li>
                        <li>Hookah</li>
                        <li>Sand</li>
                        <li>B Long</li>
                        <li>Market</li>
                        <li>Attacker Spawn</li>
                        <li>Defender Spawn</li>
                    </ul>
                </td>
                <td>
                    <ul class="list">
                        <li>Raze</li>
                        <li>Viper</li>
                        <li>Brimstone</li>
                    </ul>
                </td>
                <td>
                    <ul class="list">
                        <li>Attacking: 47.3%</li>
                        <li>Defending: 52.7%</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
   );
}

export default BindScreen;