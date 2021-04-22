import './../styles/Haven.css';

function HavenScreen() {
    return (
        <div class="whole8">
            HAVEN
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://cdn1.dotesports.com/wp-content/uploads/2020/04/14123333/Screenshot-10.png" class="havenmap"></img>
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
                            <li>A Short / Sewers</li>
                            <li>A Long</li>
                            <li>Heaven</li>
                            <li>A Link</li>
                            <li>Hell</li>
                            <li>Hay</li>
                            <li>C Link</li>
                            <li>Mid</li>
                            <li>Grass</li>
                            <li>Window</li>
                            <li>Garage</li>
                            <li>C Long</li>
                            <li>Attacker Spawn</li>
                            <li>Defender Spawn</li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list">
                            <li>Jett</li>
                            <li>Omen</li>
                            <li>Cypher</li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list">
                            <li>Attacking: 50%</li>
                            <li>Defending: 50%</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
       );
    }

export default HavenScreen;