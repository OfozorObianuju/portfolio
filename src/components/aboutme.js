import  React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Sport from './sport';
import Favourite from './favourite';

class About extends Component {
    render(){
        return(
            <div>
            <Grid>
            <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://images.pexels.com/photos/247124/pexels-photo-247124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="image"
              style={{height: '350px', width:'300px'}}
              />
            </div>           

            <h2 style={{paddingTop: '2em'}}>OFOZOR OBIANUJU MERIT</h2>
            <h4 style={{color: 'red'}}>Programmer Front END Developer</h4>  
         <hr style={{boderTop: '3px solid #833fb2', width:'50%'}} />  
            <p>Some things may be equally essential but nothing is more important than
               a healthy sense of self-esteem and loving yourself.</p>
             <hr style={{boderTop: '3px solid #833fb2', width:'50%'}} />
             <h5>Address</h5>
          <p>Student of federal university otuke</p> 
          <p>Afridash make's me to be who am today without them am </p>   
          <h5>Phone</h5>
          <p>(+123)90390-57449</p>
          <h5>Email</h5>
          <p>ofozormerit1@gmail.com</p>
          <h5>Web</h5>
          <p>www.ofozormerit1.com</p>
          <hr style={{boderTop: '3px solid #833fb2', width:'50%'}} />
             </Cell>

 <Cell className="resume-right-col" col={8}>
            <h2>Sport</h2>

           <Sport
             startYear={2012}
             endYear={9019}
             clubName='Chelsea'
             clubDescription='Chelsea Football Club is an English professional football club based in Fulham,
             Chelsea in London. Founded in 1905, they compete in the Premier League,
             the top division of English football.Chelsea Football Club is an English professional football club based in Fulham,
              Chelsea in London. Founded in 1905,
             they compete in the Premier League, the top division of English football.'
             />
              <img
              src="https://media.gettyimages.com/photos/the-chelsea-logo-during-the-premier-league-match-between-chelsea-and-picture-id596248590?s=2048x2048"
              alt="image"
              style={{height: '200px', width:'200px'}}
              /> 
          <hr style={{borderTop: "3px solid #e22947"}} />

            <h2>Favourite</h2>
            <Favourite
             foodName='food'
             foodDescription='“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.” ...'
             />
          <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGf6yXqeeniACWjDZrnM5SbaETX1i9v7yb2Hgf5zIaDWfuJ0t&s"
          />
     
         </Cell>
            </Grid>
            </div>
        )
    }
}

export default About;