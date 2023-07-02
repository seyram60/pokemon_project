import React from 'react'
import './../App.css';
import pokemon1 from './../assets/images/pokemon1.png';
import pokemon2 from './../assets/images/pokemon2.png';
import pokemon3 from './../assets/images/pokemon3.png';
import pokemon4 from './../assets/images/pokemon4.png';
import pokemon5 from './../assets/images/pokemon5.png';
import pokemon6 from './../assets/images/pokemon6.png';
import pokemon7 from './../assets/images/pokemon7.png';
import pokemon8 from './../assets/images/pokemon8.png';
import pokemon9 from './../assets/images/pokemon9.png';
import pokemon10 from './../assets/images/pokemon10.png';

function Imagepok() {
    return (
        <div class='depart'>
           <div class="image">
                <img class="image-img" src={pokemon1} alt="Bulbasaur" />
                <div class="image-overlay">
                    <div class="image-title">Bulbasaur</div>
                    <div class="image-desc">
                        height: 0.7 m, width: 6.9kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
                </div>
                <div class="image">
                <img class="image-img" src={pokemon2} alt="Ivysaur" />
                <div class="image-overlay">
                    <div class="image-title">Ivysaur</div>
                    <div class="image-desc">
                        height: 1.0 m, width: 13.0kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
                </div>
                <div class="image">
                <img class="image-img" src={pokemon3} alt="cactus" />
                <div class="image-overlay">
                    <div class="image-title">Venusaur</div>
                    <div class="image-desc">
                        height: 0.8 m, width: 23.5kg
                        <p>catch rate: 49</p>
                        <p>ability: overgrow</p>
                    </div>
                </div>
            </div>
            <div class="image">
                <img class="image-img" src={pokemon4} alt="Charmander" />
                <div class="image-overlay">
                    <div class="image-title">Charmander</div>
                    <div class="image-desc">
                        height: 5.7 m, width: 20.9kg
                        <p>catch rate: 85</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
                </div>
                <div class="image">
                <img class="image-img" src={pokemon5} alt="Charmeleon" />
                <div class="image-overlay">
                    <div class="image-title">Charmeleon</div>
                    <div class="image-desc">
                        height: 0.42 m, width: 47.3kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
                </div>
                <div class="image">
                <img class="image-img" src={pokemon6} alt="Charizard" />
                <div class="image-overlay">
                    <div class="image-title">Charizard</div>
                    <div class="image-desc">
                        height: 0.36 m, width: 49.9kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
            </div>
            <div class="image">
                <img class="image-img" src={pokemon7} alt="Squirtle" />
                <div class="image-overlay">
                    <div class="image-title">Squirtle</div>
                    <div class="image-desc">
                        height: 8.7 m, width: 10.9kg
                        <p>catch rate: 85</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
                </div>
                <div class="image">
                <img class="image-img" src={pokemon8} alt="Wartortle" />
                <div class="image-overlay">
                    <div class="image-title">Wartortle</div>
                    <div class="image-desc">
                        height: 2.5 m, width: 16.3kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
                </div>
                <div class="image">
                <img class="image-img" src={pokemon9} alt="Blastoise" />
                <div class="image-overlay">
                    <div class="image-title">Blastoise</div>
                    <div class="image-desc">
                        height: 0.7 m, width: 44.9kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
            </div>
            <div class="image">
                <img class="image-img" src={pokemon10} alt="Caterpie" />
                <div class="image-overlay">
                    <div class="image-title">Caterpie</div>
                    <div class="image-desc">
                        height: 0.8 m, width: 3.9kg
                        <p>catch rate: 45</p>
                        <p>ability: overgrow, Chlorophyll</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imagepok
