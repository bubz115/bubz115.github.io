import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Projects from './projects.js'
class Landing extends Component {
render()
{
return (
<div style= {{width: '100%', margin: 'auto' }}>
<Grid className = "landing-grid">
<Cell col = {12}>

<img
src= "/myportfolio/bubz_pic.jpg"
alt= "avatar"
className = "avatar-img"
/>
<div className = "banner-text">
<h1>Mean Stack Web Developer</h1>
 <hr/>
 <p>HTMP/CSS | Java Script | BootStrap | React | Node JS | Express | MongoDB </p>
<div className= "social-links">
{/*Linked in */}
<a href = "https://www.linkedin.com/in/abdul-rehman-aamir-03444b163/" rel="noopener noreferrer" target= "_blank">
<i class="fa fa-linkedin-square" aria-hidden="true"></i>
</a>
{/*Git Hub */}
<a href = "https://github.com/bubz115" rel="noopener noreferrer" target= "_blank">
<i class="fa fa-github" aria-hidden="true"></i>
</a>
{/*Facebook */}
<a href = "https://www.facebook.com/abd2320" rel="noopener noreferrer" target= "_blank">
<i class="fa fa-facebook-square" aria-hidden="true"></i>
</a>
{/*Youtube */}
<a href = "http://google.com" rel="noopener noreferrer" target= "_blank">
<i class="fa fa-youtube" aria-hidden="true"></i>
</a>
</div>

</div>
 </Cell>

 </Grid>

</div>

);

}

}
export default Landing;
