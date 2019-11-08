import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Sport extends Component {
    render(){
       return(
           <Grid>
       <Cell col={4}>  
       <p>{this.props.startYear}={this.props.endYear}</p>
       </Cell>
      <Cell col={8}>
      <h4 style={{marginTop:'0px'}}>{this.props.clubName}</h4>
      <p>{this.props.clubDescription}</p>
      </Cell>
        </Grid>
       );
    }
}



export default Sport;