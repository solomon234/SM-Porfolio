import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
  render(){
    return(
      <div style={{width:'100%', margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="landing-header">
              <h1> Hi! I'm a Developer </h1>
              <hr />
              <p> HTML/CSS - JavaScript - Bootstrap - ASP.NET - React - WPF </p>
              <div className="header-links">
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/solomon-muratov-a22b3a113/"><i className="fa fa-linkedin-square" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/solomon234"><i className="fa fa-github-square" /></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;
