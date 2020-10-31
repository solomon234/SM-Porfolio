import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Projects from './projects';
import Aboutme from './aboutme';


const Main = () => (

  <Switch>
  <Route exact path="/" component={Landingpage} />
  <Route path="/projects" component={Projects} />
  <Route path="/aboutme" component={Aboutme} />
  </Switch>
)

export default Main;
