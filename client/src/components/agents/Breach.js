import './../../styles/Breach.css'
function BreachScreen() {
    return(
        <div class = 'whole-breach'>
            Breach
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://assets.gamepur.com/wp-content/uploads/2020/09/01113302/valorant-guide-breach.png" class = 'image-Breach'></img>
            </div>
            <table class="table-Breach">
                <tr>
                    <th>Aftershock<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-breach-basic-ability-aftershock.png" alt ="failed" class = 'breach-abilities'></img>
                    </th>
                    <th>Flashpoint<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-breach-basic-ability-flashpoint.png" alt ="failed" class = 'breach-abilities'></img>
                    </th>
                    <th>Fault Line<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-breach-signature-ability-fault-line.png" alt ="failed" class = 'breach-abilities'></img>
                    </th>
                    <th>Rolling Thunder<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-breach-ultimate-ability-rolling-thunder.png" alt ="failed" class = 'breach-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Equip a fusion charge. Fire the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.</td>
                    <td>Equip a blinding charge. Fire the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.</td>
                    <td>Equip a seismic blast. Hold Fire to increase the distance. Release to set off the quake, dazing all players in its zone and in a line up to the zone.</td>
                    <td>Equip a seismic charge. Fire to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.</td>
                </tr>
            </table>
        </div>
    );
}

export default BreachScreen;