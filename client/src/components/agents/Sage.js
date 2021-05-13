import './../../styles/Sage.css'
function SageScreen() {
    return(
        <div class = 'whole-sage'>
            Sage
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://i.imgur.com/wZE2918.png" class = 'image-Jett'></img>
            </div>
            <table class="table-Sage">
                <tr>
                    <th>Barrier Orb<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-sage-basic-ability-barrier-orb.png" alt ="failed" class = 'sage-abilities'></img>
                    </th>
                    <th>Slow Orb<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-sage-basic-ability-slow-orb.png" alt ="failed" class = 'sage-abilities'></img>
                    </th>
                    <th>Healing Orb<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-sage-signature-ability-healing-orb.png" alt ="failed" class = 'sage-abilities'></img>
                    </th>
                    <th>Resurrection<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-sage-ultimate-ability-resurrection.png" alt ="failed" class = 'sage-abilities'></img>
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

export default SageScreen;