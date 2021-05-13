import './../../styles/Yoru.css'
function YoruScreen() {
    return(
        <div class = 'whole-yoru'>
            Yoru
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://artfiles.alphacoders.com/138/138201.png" class = 'image-yoru'></img>
            </div>
            <table class="table-Yoru">
                <tr>
                    <th>Fakeout<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-yoru-basic-ability-fakeout.png" alt ="failed" class = 'yoru-abilities'></img>
                    </th>
                    <th>Blindside<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-yoru-basic-ability-blindside.png" alt ="failed" class = 'yoru-abilities'></img>
                    </th>
                    <th>Gatecrash<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-yoru-signature-ability-gatecrash.png" alt ="failed" class = 'yoru-abilities'></img>
                    </th>
                    <th>Dimensional Drift<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-yoru-ultimate-ability-dimensional-drift.png" alt ="failed" class = 'yoru-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Equip fake foot steps to decieve oponents and force rotations.</td>
                    <td>Throw an orb that blinds oponents after a short delay once bounced off a surface.</td>
                    <td>Drop an orb that emits light noise and can be teleported to within 20 seconds</td>
                    <td>Press the bound ability key to open a rift to another dimension containing Yoru's Mask. Pressing 'Fire' activates Dimensional Drift causing Yoru to wear the mask and enter another dimension.</td>
                </tr>
            </table>
        </div>
    );
}

export default YoruScreen;