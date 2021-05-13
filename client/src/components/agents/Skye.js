import './../../styles/Skye.css'
function SkyeScreen() {
    return(
        <div class = 'whole-skye'>
            Skye
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://wallpapercave.com/wp/wp7984691.png" class = 'image-skye'></img>
            </div>
            <table class="table-Skye">
                <tr>
                    <th>Regrowth<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-skye-basic-ability-regrowth.png" alt ="failed" class = 'skye-abilities'></img>
                    </th>
                    <th>Trailblazer<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-skye-basic-ability-trailblazer.png" alt ="failed" class = 'skye-abilities'></img>
                    </th>
                    <th>Guiding Light<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-skye-signature-ability-guiding-light.png" alt ="failed" class = 'skye-abilities'></img>
                    </th>
                    <th>Seekers<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-skye-ultimate-ability-seekers.png" alt ="failed" class = 'skye-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.</td>
                    <td>Equip a trinket. Fire to send out and take control of the Trailblazer, transforming control from Skye to the Trailblazer. Move and jump to locate enemies while having a short viewing distance. Click to lunge forward, dealing 30 damage on a direct hit and concussing enemies around the impact zone.</td>
                    <td>EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.</td>
                    <td>EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.</td>
                </tr>
            </table>
        </div>
    );
}

export default SkyeScreen;