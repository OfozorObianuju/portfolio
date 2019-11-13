import React, {Component} from 'react';
import './App.css';
import {Layout, Header,Navigation,Drawer, Content} from 'react-mdl';
import {Link}from "react-router-dom";
import  Landingpage from './components/landingpage';
// import projects from './components/Projects';

class App extends Component {
  render(){
    return (
        // <BrowserRouter>
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none',color: 'white'}}
   to="/"> Myportfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none',color: 'black'}}to="/">Myportfolio</Link>}>
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
       
    </Layout>
</div>
// </BrowserRouter>
    //   {/* </BrowserRouter> */}
    );
  }
}


export default App;
