import React from 'react'
import pokemon1 from './../assets/images/pokemon1.jpg';
import pokemon2 from './../assets/images/pokemon2.jpg';
import pokemon3 from './../assets/images/pokemon3.jpg';
import pokemon4 from './../assets/images/pokemon4.jpg';
import pokemon5 from './../assets/images/pokemon5.jpg';
import pokemon6 from './../assets/images/pokemon6.jpg';
import pokemon7 from './../assets/images/pokemon7.jpg';
import pokemon8 from './../assets/images/pokemon8.jpg';
import pokemon9 from './../assets/images/pokemon9.jpg';
import pokemon10 from './../assets/images/pokemon10.jpg';
import Grid from '@mui/material/Grid';

function Pokemon() {
    return (
        <div>
            <Grid container  spacing={0}  paddingTop={5}>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon1} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon2} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon3} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon4} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon5} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon6} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon7} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon8} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon9} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
                <Grid item xs={4}  md={4}>
                    <img src={pokemon10} alt='this is a pokemon' width="90%" height="70%"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Pokemon
