import './../../styles/Raze.css'
function RazeScreen() {
    return(
        <div class = 'whole-raze'>
            Raze
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://i.imgur.com/EASU0a5.jpg" class = 'image-raze'></img>
            </div>
            <table class="table-Raze">
                <tr>
                    <th>Boom Bot<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-raze-basic-ability-boom-bot.png" alt ="failed" class = 'raze-abilities'></img>
                    </th>
                    <th>Blast Pack<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-raze-basic-ability-blast-pack.png" alt ="failed" class = 'raze-abilities'></img>
                    </th>
                    <th>Paint Shells<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-raze-signature-ability-paint-shells.png" alt ="failed" class = 'raze-abilities'></img>
                    </th>
                    <th>Showstopper<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-raze-ultimate-ability-showstopper.png" alt ="failed" class = 'raze-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Equip a Boom Bot. Fire will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.</td>
                    <td>Throw a Blast Pack which Raze can use to boost herself and deal damage to enemies after a brief delay. The Blast Pack can be detonated early with the ability key. The Blast Pack also can be used to knockback allies and enemies.</td>
                    <td>Equip and throw a cluster grenade that explodes shortly after detonation, spawning in clusters that both deal significant damage.</td>
                    <td>Equip a rocket launcher. Fire shoots a rocket that does massive area damage on contact with anything.</td>
                </tr>
            </table>
        </div>
    );
}

export default RazeScreen;