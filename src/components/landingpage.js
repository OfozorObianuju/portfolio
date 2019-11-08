import  React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'; 
import image from './girlm.png'


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100', margin: 'auto'}}>
         <Grid className="landing-grid">
         {/* <Cell> */}
         <Cell>
         <img
         src={image}
         alt="image"
         className="girlm-img"
          />  


           <div className="font-text">
           <h1>Front End Web Developer</h1> 

           <hr/>

       <p> HTML/CSS | Boostrap | JavaScript | React</p>
     
       <div  className="social-links">

         {/* LinkedIn */}
        <a href=" https://fontawesome.com/icons/google?style=brands" rel="noopener noerferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
       </a>

         {/* Github */}
        <a href=" https://fontawesome.com/icons/google?style=brands" rel="noopener noerferrer" target="_blank">
       <i className="fa fa-github-squnare" aria-hidden="true" />
       </a>
            
         {/* Freecodecamp */}
       <a href=" https://fontawesome.com/icons/google?style=brands" rel="noopener noerferrer" target="_blank">
       <i className="fa fa-free-code-camp" aria-hidden="true" />
       </a>

          {/* Instagram */}
          <a href=" https://fontawesome.com/icons/google?style=brands" rel="noopener noerferrer" target="_blank">
       <i className="fa fa-instagram" aria-hidden="true" />
       </a>

         {/* Youtube */}
       <a href=" https://fontawesome.com/icons/google?style=brands" rel="noopener noerferrer" target="_blank">
       <i className="fa fa-youtube-square" aria-hidden="true" />
       </a>
          
            </div>
             </div>
             </Cell>
            </Grid>
         </div>
        )
    }
}

export default Landing;