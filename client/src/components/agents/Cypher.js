import './../../styles/Cypher.css'
function CypherScreen() {
    return(
        <div class = 'whole-cypher'>
            Cypher
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://wallpapercave.com/wp/wp6438320.png" class = 'image-Cypher'></img>
            </div>
            <table class="table-Cypher">
                <tr>
                    <th>Trapwire<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-cypher-basic-ability-trapwire.png" alt ="failed" class = 'cypher-abilities'></img>
                    </th>
                    <th>Cyber Cage<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-cypher-basic-ability-cyber-cage.png" alt ="failed" class = 'cypher-abilities'></img>
                    </th>
                    <th>Spycam<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-cypher-signature-ability-spycam.png" alt ="failed" class = 'cypher-abilities'></img>
                    </th>
                    <th>Neural Theft<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-cypher-ultimate-ability-neural-theft.png" alt ="failed" class = 'cypher-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Place a stealthed tripwire between two walls. Triggering enemies are restrained and revealed for a short time. If the trap is not destroyed, it activates to daze the trapped victim. Can be picked up.</td>
                    <td>Toss out a remote activation trap. Reactivate to create a cage that slows enemies who pass through it. Look at a trap and press USE to detonate it, or hold ACTIVATE to detonate all.</td>
                    <td>Place a remote camera. After placing, reactivate to view the video feed. Left click while in camera to fire a tracking dart. Recharges when picked up or killed.</td>
                    <td>Extract information from the corpse of an enemy, revealing the location of their living allies.</td>
                </tr>
            </table>
        </div>
    );
}

export default CypherScreen;