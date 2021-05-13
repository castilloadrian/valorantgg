import './../../styles/Reyna.css'
function ReynaScreen() {
    return(
        <div class = 'whole-reyna'>
            Reyna
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://i.imgur.com/puAoRHx.png" class = 'image-reyna'></img>
            </div>
            <table class="table-Reyna">
                <tr>
                    <th>Leer<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-reyna-basic-ability-leer.png" alt ="failed" class = 'reyna-abilities'></img>
                    </th>
                    <th>Devour<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-reyna-basic-ability-devour.png" alt ="failed" class = 'reyna-abilities'></img>
                    </th>
                    <th>Dismiss<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-reyna-signature-ability-dismiss.png" alt ="failed" class = 'reyna-abilities'></img>
                    </th>
                    <th>Empress<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-reyna-ultimate-ability-empress.png" alt ="failed" class = 'reyna-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Equip an ethereal, destructible eye. Activate to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.</td>
                    <td>Harvest a soul orb to rapidly heal and gain Overheal on full health.</td>
                    <td>Consume a nearby Soul Orb to become invincible and fast while having weapons stowed, allowing Reyna to rush out or soak up danger.</td>
                    <td>INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.</td>
                </tr>
            </table>
        </div>
    );
}

export default ReynaScreen;