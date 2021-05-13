import './../../styles/Omen.css'
function OmenScreen() {
    return(
        <div class = 'whole-omen'>
            Omen
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://wallpapercave.com/wp/wp6423303.jpg" class = 'image-omen'></img>
            </div>
            <table class="table-Omen">
                <tr>
                    <th>Shroueded Step<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-omen-basic-ability-shrouded-step.png" alt ="failed" class = 'omen-abilities'></img>
                    </th>
                    <th>Paranoia<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-omen-basic-ability-paranoia.png" alt ="failed" class = 'omen-abilities'></img>
                    </th>
                    <th>Dark Cover<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-omen-signature-ability-dark-cover.png" alt ="failed" class = 'omen-abilities'></img>
                    </th>
                    <th>From the Shadows<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-omen-ultimate-ability-from-the-shadows.png" alt ="failed" class = 'omen-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>After a delay, dematerialize and teleport a short distance.</td>
                    <td>Send out an Ethereal shadow in a straight line, Nearsighting anyone it touches.</td>
                    <td>Cast out a stealthed ethereal orb that bursts into an obscuring sphere of shadow at its final location. Can be charged to increase distance.</td>
                    <td>Select anywhere on the map to teleport and reform. When arriving, appear as a Shade, that will go back to your original location if killed. Once the teleport is complete, become Incorporeal for a short time.</td>
                </tr>
            </table>
        </div>
    );
}

export default OmenScreen;