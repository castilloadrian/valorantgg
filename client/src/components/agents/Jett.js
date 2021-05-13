import './../../styles/Jett.css'
function JettScreen() {
    return(
        <div class = 'whole-jett'>
            Jett
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://static.invenglobal.com/upload/image/2020/04/02/i1585819016848035.jpeg" class = 'image-Jett'></img>
            </div>
            <table class="table-Jett">
                <tr>
                    <th>Cloudburst<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-jett-basic-ability-cloudburst.png" alt ="failed" class = 'image-abilities'></img>
                    </th>
                    <th>Updraft<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-jett-basic-ability-updraft.png" alt ="failed" class = 'image-abilities'></img>
                    </th>
                    <th>Tailwind<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-jett-signature-ability-tailwind.png" alt ="failed" class = 'image-abilities'></img>
                    </th>
                    <th>Blade Storm<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-jett-ultimate-ability-blade-storm.png" alt ="failed" class = 'image-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Throw out a cloud of fog that obscures vision on impact. Hold down the ability button to bend the cloud’s in-flight trajectory.</td>
                    <td>After a brief wind up, propel yourself upwards.</td>
                    <td>Immediately dash a short distance in the direction you’re moving.</td>
                    <td>Arm yourself with several deadly throwing knives that deal moderate damage and kill on headshots. Scoring a kill restores all daggers. Left click throws a single dagger. Right click throws all remaining daggers in a short-ranged burst.</td>
                </tr>
            </table>
        </div>
    );
}

export default JettScreen;