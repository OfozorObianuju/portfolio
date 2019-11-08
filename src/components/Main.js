import React, {Component} from 'react';
import Landingpage from './landingpage';
import AboutMe from './aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './resume';
import App from '../App'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Main extends Component {
  render(){
    return(
      <Router>
      <div>
        <App/>
        <Switch>
      <Route exact path="/" component= {Landingpage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      </Switch>
    </div>
      </Router>
    )
  }
}

export default Main;