import './../../styles/Viper.css'
function ViperScreen() {
    return(
        <div class = 'whole-viper'>
            Viper
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://wallpapercave.com/wp/wp6477714.png" class = 'image-viper'></img>
            </div>
            <table class="table-Viper">
                <tr>
                    <th>Snake Bite<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-viper-basic-ability-snake-bite.png" alt ="failed" class = 'viper-abilities'></img>
                    </th>
                    <th>Poison Cloud<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-viper-basic-ability-poison-cloud.png" alt ="failed" class = 'viper-abilities'></img>
                    </th>
                    <th>Toxic Screen<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-viper-signature-ability-toxic-screen.png" alt ="failed" class = 'viper-abilities'></img>
                    </th>
                    <th>Viper's pit<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-viper-ultimate-ability-vipers-pit.png" alt ="failed" class = 'viper-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Fire a projectile that explodes into a pool of damaging acid.</td>
                    <td>Throw a gas emitter that you can reactivate to create a poisonous smoke cloud at the cost of fuel. The emitter can be picked up and thrown again after a short cooldown. Decay is applied to enemies entering the smoke.</td>
                    <td>Deploy a long line of gas emitters that you can reactivate to create a tall wall of toxic gas at the cost of fuel. Applies Decay to enemies entering.</td>
                    <td>Emit a massive toxic cloud in a large area that lasts as long as Viper stays inside the cloud. Enemies inside the cloud are highlighted to Viper and are applied Decay.</td>
                </tr>
            </table>
        </div>
    );
}

export default ViperScreen;