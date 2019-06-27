import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class experience extends Component {
render(){
return (
<Grid>
<Cell col= {4}>
<p>{this.props.startyear} - {this.props.endyear} </p>

</Cell>
<Cell col = {8}>
<h4 style= {{marginTop: '0px'}}>{this.props.job} </h4>
<p>{this.props.jobDesc}</p>

 </Cell>

 </Grid>



);


};


};
export default experience;
