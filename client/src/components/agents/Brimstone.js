import './../../styles/Brimstone.css'
function BrimstoneScreen() {
    return(
        <div class = 'whole-brimstone'>
            Brimstone
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://static.invenglobal.com/upload/image/2020/05/04/o1588624507570631.jpeg" class = 'image-Jett'></img>
            </div>
            <table class="table-Brimstone">
                <tr>
                    <th>Stim Beacon<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-brimstone-basic-ability-stim-beacon.png" alt ="failed" class = 'brimstone-abilities'></img>
                    </th>
                    <th>Incendiary<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-brimstone-basic-ability-incendiary.png" alt ="failed" class = 'brimstone-abilities'></img>
                    </th>
                    <th>Sky Smoke<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-brimstone-signature-ability-sky-smoke.png" alt ="failed" class = 'brimstone-abilities'></img>
                    </th>
                    <th>Orbital Strike<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-brimstone-ultimate-ability-orbital-strike.png" alt ="failed" class = 'brimstone-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Launch an incendiary grenade that deploys a damaging field of fire.</td>
                    <td>Equip to instantly throw a Stim Beacon, granting Combat Stim.</td>
                    <td>Use your map to call in orbital deployment smokescreens that obscure vision. Click to set the locations, and confirm to launch.</td>
                    <td>Use your map to target a location, launching a devastating orbital strike that pulses for high damage over several seconds.</td>
                </tr>
            </table>
        </div>
    );
}

export default BrimstoneScreen;