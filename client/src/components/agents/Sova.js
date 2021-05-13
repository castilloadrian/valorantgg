import './../../styles/Sova.css'
function SovaScreen() {
    return(
        <div class = 'whole-sova'>
            Sova
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://wallpapercave.com/wp/wp6489850.jpg" class = 'image-sova'></img>
            </div>
            <table class="table-Sova">
                <tr>
                    <th>Owl drone<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-sova-basic-ability-owl-drone.png" alt ="failed" class = 'sova-abilities'></img>
                    </th>
                    <th>Shock Bolt<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-sova-basic-ability-shock-bolt.png" alt ="failed" class = 'sova-abilities'></img>
                    </th>
                    <th>Recon Bolt<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-sova-signature-ability-recon-bolt.png" alt ="failed" class = 'sova-abilities'></img>
                    </th>
                    <th>Hunter's Fury<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-sova-ultimate-ability-hunters-fury.png" alt ="failed" class = 'sova-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Deploy a pilotable drone that can fire a dart that will reveal enemies who are hit.</td>
                    <td>Fire an explosive bolt that emits a damaging pulse of static energy upon impact.</td>
                    <td>Fire a bolt that deploys a sonar emitter. The sonar pings tag nearby enemies, causing them to be revealed. Can be destroyed.</td>
                    <td>Fire up to three deadly energy blasts that spear across the entire map. Each hit enemy takes heavy damage and is marked.</td>
                </tr>
            </table>
        </div>
    );
}

export default SovaScreen;