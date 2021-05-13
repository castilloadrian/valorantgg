import './../../styles/Killjoy.css'
function KilljoyScreen() {
    return(
        <div class = 'whole-killjoy'>
            Killjoy
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://i.ytimg.com/vi/ua-iIRQDY8g/maxresdefault.jpg" class = 'image-Killjoy'></img>
            </div>
            <table class="table-Killjoy">
                <tr>
                    <th>Alarmbot<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-killjoy-basic-ability-nanoswarm.png" alt ="failed" class = 'killjoy-abilities'></img>
                    </th>
                    <th>Nanoswarm<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-killjoy-basic-ability-alarmbot.png" alt ="failed" class = 'killjoy-abilities'></img>
                    </th>
                    <th>Turret<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-killjoy-signature-ability-turret.png" alt ="failed" class = 'killjoy-abilities'></img>
                    </th>
                    <th>Lockdown<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-killjoy-ultimate-ability-lockdown.png" alt ="failed" class = 'killjoy-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Deploy an Alarmbot that detects nearby enemies and quickly attempts to apply Vulnerable to them.</td>
                    <td>A grenade that goes covert shortly after landing. Activate to detonate and deal rapid damage within the radius.</td>
                    <td>Deploy a turret that locks onto enemies, dealing damage. The Turret can be destroyed by enemies and is deactivated if Killjoy too far from it.</td>
                    <td>Creates a big dome surrouding an area, if a player is inside of the dome in a certain time they get Detained and lose their ability to use weapons.</td>
                </tr>
            </table>
        </div>
    );
}

export default KilljoyScreen;