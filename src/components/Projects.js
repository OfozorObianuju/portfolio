import  React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }

     toggleCategories() {

      if(this.state.activeTab === 0)  {
          return(
              <div  className="projects-grid">
       {/* Projects1*/}
     <Card shadow={0} style={{width: '320px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>React projects1</CardTitle>
    <CardText>
    The single greatest invention man ever conceived in the dollar bill,
    because I don't want to know the conversion rate for coconuts.
        
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Facebook</Button>
        <Button colored>Twitter</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
   </Card>

     {/* Projects2*/}
     <Card shadow={0} style={{width: '320px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>React projects2</CardTitle>
    <CardText>
    The Best way to help the world is to help someone!
    “Most folks are about as happy as they make their minds up to be.” 
    “No man has a good enough memory to be a successful liar.”  
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Facebook</Button>
        <Button colored>Twitter</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

          {/* Projects3*/}
     <Card shadow={0} style={{width: '320px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>React projects3</CardTitle>
    <CardText>
    Perhaps you will have to spend hours on your knees or upon your face before the throne. 
    Never mind. Wait. God will do great things for you if you will wait for Him.
    Yield to Him. Cooperate with Him.
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Facebook</Button>
        <Button colored>Twitter</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

     </div>
         
 

          );
      } else if(this.state.activeTab ===1){
          return(
            <div><h1>this is Html</h1></div>
          );
      }else if(this.state.activeTab ===2){
          return(
              <div><h1>this is Css</h1></div>
          );
      }else if(this.state.activeTab===3){
          return(
              <div><h1>this is Javascript</h1></div>
          );
      }
     }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Html</Tab>
                    <Tab>Css</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>
                <section>
                <Grid>
                 <Cell col={12}>
                 <div className="content">{this.toggleCategories()}</div>
                 </Cell>
                </Grid>
                </section>
            </div>    
        );
    }
}
   










export default Projects;
