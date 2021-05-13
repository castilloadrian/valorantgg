import './../styles/Split.css';

function SplitScreen() {
    return (
        <div class="whole11">
            SPLIT
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://cdn1.dotesports.com/wp-content/uploads/2020/04/14123350/Screenshot-9-768x709.png" alt="split" class="splitmap"></img>
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
                            <li>Market</li>
                            <li>Mid</li>
                            <li>Vents / Ropes</li>
                            <li>Mail</li>
                            <li>A Heaven</li>
                            <li>Stairs</li>
                            <li>Rafters</li>
                            <li>Hell</li>
                            <li>B main</li>
                            <li>Sewers</li>
                            <li>B Heaven</li>
                            <li>Elbow</li>
                            <li>Screens</li>
                            <li>Sign</li>
                            <li>Attacker Spawn</li>
                            <li>Defender Spawn</li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list">
                            <li>Raze</li>
                            <li>Cypher</li>
                            <li>Skye</li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list">
                            <li>Attacking: 46.3%</li>
                            <li>Defending: 53.7%</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
       );
    }

export default SplitScreen;