import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Favourite extends Component {
    render(){
       return(
           <Grid>
       <Cell col={4}>
       <p>{this.props.firstYear}={this.props.endYear}</p>
       </Cell>
      <Cell col={8}>
      <h4 style={{marginTop:'0px'}}>{this.props.foodName}</h4>
      <p>{this.props.foodDescription}</p>
      </Cell>
        </Grid>
       );
    }
}



export default Favourite;