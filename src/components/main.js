import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';


var Main = () => (

<Switch>
<Route exact path = "/myportfolio" component = {Landing}/>
<Route exact path = "/aboutme" component = {About}/>
<Route exact path = "/projects" component = {Projects}/>
<Route exact path = "/contact" component = {Contact}/>
<Route exact path = "/resume" component = {Resume}/>
</Switch>





)
export default Main;
