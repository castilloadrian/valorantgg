import './../../styles/Pheonix.css'
function PheonixScreen() {
    return(
        <div class = 'whole-pheonix'>
            Pheonix
            <br></br><hr></hr><br></br>
            <div>
                <img src="https://i.imgur.com/AXzXE9P.png" class = 'image-pheonix'></img>
            </div>
            <table class="table-Pheonix">
                <tr>
                    <th>Blaze<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/1-phoenix-basic-ability-blaze.png" alt ="failed" class = 'pheonix-abilities'></img>
                    </th>
                    <th>Curveball<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/2-phoenix-basic-ability-curveball.png" alt ="failed" class = 'pheonix-abilities'></img>
                    </th>
                    <th>Hot Hands<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/3-phoenix-signature-ability-hot-hands.png" alt ="failed" class = 'pheonix-abilities'></img>
                    </th>
                    <th>Run It Back<br></br>
                        <img src="https://vgraphs.com/images/agents/abilities/4-phoenix-ultimate-ability-run-it-back.png" alt ="failed" class = 'pheonix-abilities'></img>
                    </th>
                </tr>
                <tr>
                    <td>Cast out a flame wall that blocks vision and damages anyone passing through it. You can bend the wall when casting by turning while holding left click.</td>
                    <td>A flare orb that takes a curving path and detonates shortly after throwing.</td>
                    <td>Throw a fireball that explodes after a delay or upon impact with the ground. The fire zone damages enemies, and heals you.</td>
                    <td>Mark your current location. If you die during this ability’s duration, or when this ability’s duration expires, you’ll be reborn at the marked location with full health.</td>
                </tr>
            </table>
        </div>
    );
}

export default PheonixScreen;