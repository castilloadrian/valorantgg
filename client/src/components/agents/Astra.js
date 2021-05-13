import './../../styles/Astra.css'
function AstraScreen() {
    return(
        <div class = 'whole-astra'>
            Astra
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://static.invenglobal.com/upload/image/2021/02/27/o1614449790943127.jpeg" class = 'image-Jett'></img>
            </div>
            <table class="table-Astra">
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
                    <td>Place a solid barrier that blocks line of sight. The wall will be at half health for a few seconds after initial deployment.</td>
                    <td>Slow Orb is a Basic ability for Sage. Equip an orb. Throw to fire the orb and create a radius slowing enemies.</td>
                    <td>Healing Orb heals its target 12 health every second for 5 seconds, pausing its effect for 2 seconds if its target takes damage during the effect.</td>
                    <td>Revive your teammate to full health after a short delay.</td>
                </tr>
            </table>
        </div>
    );
}

export default AstraScreen;