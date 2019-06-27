import React, {Component} from 'react';
import {Grid, Cell,ProgressBar} from 'react-mdl';

class Skill extends Component {
render () {
return (
<Grid>
<Cell col = {12}>
<div style = {{display: 'flex'}}>
<h5>{this.props.skill} </h5>
<ProgressBar style= {{margin: 'auto', width: '75%',}} progress = {this.props.progress1}/> </div>



 </Cell>

 </Grid>











)



}



}
export default Skill;
