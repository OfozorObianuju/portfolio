import  React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';



class Contact extends Component {
    render(){
        return(
      <div  className="contact-body">
             <Grid  className="contact-grid">
              <Cell  col={6}>
               <h2>Merit-Andy</h2>
            <img
               src="https://images.unsplash.com/photo-1567468219153-4b1dea5227ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
               alt="image"
               style={{height: '250px'}}
              />
              <p  style={{ width:'75%', margin: 'auto', paddingTop: '1em'}}> Win or lose you will never regret working hard, making sacrifices, being disciplined or focusing too much. ...
      He who does not work, will not eat. ...
      Here every man may be master and owner of his owne labour and land...If he have nothing but his hands, he may...by industrie quickly grow rich.</p>

              </Cell>
               <Cell  col={6}>
               <h2>Contact Me</h2>
               <hr/>

               <div className="contact-list">
               <List>
                    <ListItem>
                  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (+1234)903-905-7449
                </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-fax" aria-hidden="true"/>
                  (+1234)903-905-7449
                </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                   Someone example@gmail.com
                </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
                  <i className="fa fa-Skype" aria-hidden="true"/>
                   SkypeID
                </ListItemContent>
                </ListItem>
             </List>
           </div> 
        </Cell> 
      </Grid>
    </div>
      )
   }
}

export default Contact;