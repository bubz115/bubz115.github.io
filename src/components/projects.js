import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Project extends Component {
constructor (props){
super(props);
this.state = {activeTab : 0};


}
togglecategories () {
if (this.state.activeTab === 0){
  return (
  <div className= "project-grid">
  {/*project 1 */}
<Card shadow= {5} style= {{minWidth : '450', margin: 'auto'}}>
<CardTitle style = {{color: '#fff', height: '176px', background: 'url(/myportfolio/firstproject.PNG) center / cover'}}>
What to do (TODO LIST)
</CardTitle>
<CardText>
It is a todo list developed using EJS, Node.js and MongoDB. This application will ask about your daily schdule and will alarm you when some particular event have to be done. The <b> MVC </b> concept makes this application stuuning and reliable.
</CardText>
<CardActions border>
<Button colored>Git Hub</Button>
<Button colored>CodePen</Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style= {{color : '#fff'}}>
<IconButton name= "share"/>
</CardMenu>
</Card>
{/*project 2 */}
<Card shadow= {5} style= {{minWidth : '450', margin: 'auto'}}>
<CardTitle style = {{color: '#fff', height: '176px', background: 'url(/myportfolio/2nd.PNG) center / cover'}}>
Perfect Essays
</CardTitle>
<CardText>
A stunning website developed using React, MongoDB and Node.js. This application help the user to place the orders online and all their order information is saved into server using node.js and MongoDB.
</CardText>
<CardActions border>
<Button colored>Git Hub</Button>
<Button colored>CodePen</Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style= {{color : '#fff'}}>
<IconButton name= "share"/>
</CardMenu>
</Card>
{/*project 3 */}
<Card shadow= {5} style= {{minWidth : '450', margin: 'auto'}}>
<CardTitle style = {{color: '#fff', height: '176px', background: 'url(/myportfolio/3rd.PNG) center / cover'}}>
Portfolio
</CardTitle>
<CardText>
This is a flexible web application developed by using <b>React.js</b> and <b> Node.js </b>. This application consist react modules which makes it even more flexible.
</CardText>
<CardActions border>
<Button colored>Git Hub</Button>
<Button colored>CodePen</Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style= {{color : '#fff'}}>
<IconButton name= "share"/>
</CardMenu>
</Card>
{/*project4*/}


<Card shadow= {5} style= {{minWidth : '450', margin: 'auto'}}>
<CardTitle style = {{color: '#fff', height: '176px', background: 'url(/myportfolio/4.PNG) center / cover'}}>
Finance Software
</CardTitle>
<CardText>
A stunning desktop application developed on user demand. This application enables comptrollers and manager numerous accounting tasks like reconciling accounts like payables and receivebles.
</CardText>
<CardActions border>
<Button colored>Git Hub</Button>
<Button colored>CodePen</Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style= {{color : '#fff'}}>
<IconButton name= "share"/>
</CardMenu>
</Card>
{/*project 5*/}
<Card shadow= {5} style= {{minWidth : '450', margin: 'auto'}}>
<CardTitle style = {{color: '#fff', height: '176px', background: 'url(/myportfolio/5.PNG) center / cover'}}>
Data Tracker
</CardTitle>
<CardText>
This is a flexible web application developed by using <b>Angular.js</b> and <b> Node.js </b>. This application consist Angular materials which makes it even more flexible.
</CardText>
<CardActions border>
<Button colored>Git Hub</Button>
<Button colored>CodePen</Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style= {{color : '#fff'}}>
<IconButton name= "share"/>
</CardMenu>
</Card>
{/*project 6*/}
<Card shadow= {5} style= {{minWidth : '450', margin: 'auto'}}>
<CardTitle style = {{color: '#fff', height: '176px', background: 'url() center / cover'}}>
Data Tracker
</CardTitle>
<CardText>
This is a flexible web application developed by using <b>React.js</b> and <b> Node.js </b>. This application consist React materials which makes it even more flexible.This website updated you about the weather all over the world.
</CardText>
<CardActions border>
<Button colored>Git Hub</Button>
<Button colored>CodePen</Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style= {{color : '#fff'}}>
<IconButton name= "share"/>
</CardMenu>
</Card>

  </div>
)

}


}


render()
{
return (
<div className = "category-tabs">
<Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState ({activeTab: tabId})} ripple>
<Tab> Projects </Tab>
</Tabs>

<Grid>
<Cell col = {12}>
<div className = "content">
{this.togglecategories()}
</div>
 </Cell>
 </Grid>

</div>

);

}

}
export default Project;
