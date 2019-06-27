import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skill from './skills.js'
class Resume extends Component {
render()
{
return (
<Grid>
<Cell className= 'left-side' col = {4}>
<div style = {{textAlign: 'center'}}>
<img src='/myportfolio/bubz_pic.jpg'
alt='avatar'
style= {{height: '200px', width: '250px'}}  />
</div>
<h2 style = {{paddingTop: '2em'}}>Abdul Rehman </h2>
<h4 style = {{color: 'grey'}}>Programmer </h4>
 <hr style= {{borderTop: '3px solid #833fb2', width: '50%'}}/>
 <p style= {{}}><b>Mean Stack Web Developer </b> using <i>MongoDb, Express.js, React.js</i> and<i> Node.js</i> with an emphasis on <b><i>Front and back end </i></b> web development using <b>React</b>. </p>

<hr style= {{borderTop: '3px solid #833fb2', width: '50%'}}/>
<h5>Address </h5>
<p> Harely Street, lane#4, near roots girls college, rwp</p>
<h5>Phone </h5>
<p><b>03360001452</b></p>
<h5>Email </h5>
<p><b>bubzz115@gmail.com</b></p>

<hr style= {{borderTop: '3px solid #833fb2', width: '50%'}}/>

</Cell>
<Cell className='right-side' col = {8}>
<h3>Education </h3>
<Education
startyear={2016}
endyear= {2019}
school= "Capital University Islamabad"
schoolDesc= "Bachelors in Computer Science"
/>
<Education
startyear={2013}
endyear= {2015}
school= "Saint Mary's College"
schoolDesc= "Pre-Engineering"
/>
<Education
startyear={2002}
endyear= {2012}
school= "Spring Field Public School"
schoolDesc= "Matriculation in Sciences"
/>

<h3> Experience </h3>
<Experience
startyear= {2013}
endyear= {2014}
job= "Sky Connect"
jobDesc= "I was working as a sales executive and my task was to generate the leads."

/>
<Experience
startyear= {2015}
endyear= {2017}
job= "Lenovo"
jobDesc= "I was working as a Brand Ambassador."

/>
<Experience
startyear= {2015}
endyear= {2017}
job= "SkyScrapers"
jobDesc= "I'm working as a sales specialist and my task is to provide customer service."

/>
<h2> Skills</h2>
<Skill
skill = 'HTML'
progress1= {85}
/>
<Skill
skill = 'CSS'
progress1= {70}
/>
<Skill
skill = 'JavaScript'
progress1= {65}
/>
<Skill
skill = 'Node.js'
progress1= {43}
/>
<Skill
skill = 'React'
progress1= {30}
/>
<Skill
skill = 'MongoDB'
progress1= {80}
/>
</Cell>

 </Grid>

);

}

}
export default Resume;
