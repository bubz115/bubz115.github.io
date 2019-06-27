import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';



class Contact extends Component {
render()
{
return (
  <div className= "contact-body">
<Grid className =  "contact-grid">
<Cell col= {6}>
<h2>Abdul-Rehman Aamir </h2>
<img src= "/myportfolio/bubz_pic.jpg" alt="avatar"
style={{height: '250px'}}
/>
<p style = {{width: '75%', margin: 'auto', paddingTop: '1em '}}><b>Mean Stack Web Developer </b> using <i>MongoDb, Express.js, React.js</i> and<i> Node.js</i> with an emphasis on <b><i>Front and back end </i></b> web development using <b>React</b>.</p>
</Cell>
<Cell col= {6}>
<h2> Contact Me </h2>
<hr/>
<div className= "contact-list">
<List>
  <ListItem>
    <ListItemContent style= {{fontSize : '30px', fontFamily: 'Anton'}}>
<i className="fa fa-phone-square" aria-hidden= "true"/>
    03360001453</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style= {{fontSize : '30px', fontFamily: 'Anton'}}>
<i className="fa fa-fax" aria-hidden= "true"/>
    03360001453</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style= {{fontSize : '30px', fontFamily: 'Anton'}}>
<i className="fa fa-envelope" aria-hidden= "true"/>
    bubzz115.com</ListItemContent>
  </ListItem>


</List>
</div>
</Cell>

 </Grid>
 </div>
);

}

}
export default Contact;
