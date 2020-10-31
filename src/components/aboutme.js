import React, { Component } from 'react'
import { Tabs, Tab, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Cell, ProgressBar } from 'react-mdl';


class Aboutme extends Component {
  state ={
    name: 'Solomon Muratov',
  }
  
  handleChangeFunc = (e) =>{
    this.setState({
      name: e.target.value,
    });
  }
  


 
  render() {
    return (
      <>
      <Grid>
        <Cell col={6}>
          <Card shadow={1} className={"cardStyle"} style={{width: '512px',height:'85vh',margin:'auto'}} >
            <CardTitle style={{height:'150px'}}>
              <h4 className={"headerTitleTop"}>My Name is:</h4>
              <h2 className={"headerTitleMid"}>Solomon Muratov,</h2>
              <h4 className={"headerTitleBot"}>My Hobbies are Programming, Gaming and 3D Printing</h4>
            </CardTitle>  
            <hr style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
            <CardText>
              <div className={"aboutMePic"}></div>
              <p style={{float:'right',textAlign:'right',fontSize:'2rem',width:'60%',lineHeight:'2.5',marginTop: '-10px'}}>
                  .Net Web <strong>Developer</strong> <br />                  
                  Print 3D Objects <br />
                  Custom Build PCs<br />
                  Freelance Developer<br />
              </p>
              <hr style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} />
              <p style={{fontSize:'2rem',lineHeight:'1.5'}}>
                  While I maintain a variety of interests, most of my days i spend developing React JS, Angular, and C# Applications.
              </p>
            </CardText>
          </Card>           
        </Cell>
        <Cell col={6}>
        <Card shadow={1} className={"cardStyle"} style={{width: '90%',height:'85vh'}} >
          <div style={{width:'85%',marginLeft:'auto',marginRight:'auto'}} > 
            <CardTitle style={{height:'100px'}}>
              <h4 className={"headerTitleMid"}>Who is <strong>Solomon Muratov</strong></h4>
            </CardTitle>  
            <hr  />
            <CardText>
              <p>
              Graduate of Farmingdale State College's Computer Programming & Information Systems 
              program with experience in web development, computer maintenance, 3D printing, 
              programming and computer systems. Advanced knowledge of C#, C++, Html5, CSS and 
              JavaScript languages. Seeking opportunities to leverage my skill set as a .NET Web Developer. 
              Fluent in both the English and Russian languages. 
              </p>
            </CardText>
            <hr />
            <div >
              <h3>Javascript - ES6+</h3>
              <ProgressBar progress={80} buffer={30} />
              <h3>.NET - C#</h3>
              <ProgressBar progress={80} buffer={20} />
              <h3>HTML5 & CSS3</h3>
              <ProgressBar progress={100}  />              
              <h3>React JS</h3>
              <ProgressBar progress={60} buffer={40} />
              <h3>Angular JS</h3>
              <ProgressBar progress={80} buffer={20} />
            </div>
          </div>
          </Card>           
        </Cell>        
      </Grid>
        
       
      </>
    )
  }
}

export default Aboutme;