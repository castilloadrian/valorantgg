import './../styles/Icebox.css';

function IceboxScreen() {
    return (
        <div class="whole10">
            ICEBOX
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://cdn1.dotesports.com/wp-content/uploads/2020/11/12090242/db73bd9e504575ee2e703c1142b68a14.png" alt="icebox" class="iceboxmap"></img>
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
                            <li>Green / B main</li>
                            <li>Yellow</li>
                            <li>Snowman</li>
                            <li>Kitchen</li>
                            <li>Orange</li>
                            <li>Tube</li>
                            <li>Boiler</li>
                            <li>Screens</li>
                            <li>Belt</li>
                            <li>Pipes</li>
                            <li>410</li>
                            <li>Nest</li>
                            <li>Rafters</li>
                            <li>Nest</li>
                            <li>Attacker Spawn</li>
                            <li>Defender Spawn</li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list">
                            <li>Jett</li>
                            <li>Sage</li>
                            <li>Killjoy</li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list">
                            <li>Attacking: 48.4%</li>
                            <li>Defending: 51.6%</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
       );
    }

export default IceboxScreen;