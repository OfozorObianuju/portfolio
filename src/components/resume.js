import  React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render(){
        return(
            <div>
            <Grid>
            <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://qph.fs.quoracdn.net/main-qimg-62bba4113eaa1ebe46baf04e79376f2a"
              alt="image"
              style={{height: '350px', width: '350px',padding: '2em'}}
              />
            </div>   

            <h2 style={{paddingTop: '2em'}}>Ofozor Merit Andy</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>  
         <hr style={{boderTop: '3px solid #833fb2', width:'50%'}} />  
            <p>Win or lose you will never regret working hard, making sacrifices,
             being disciplined or focusing too much. ...
             He who does not work, will not eat. ...
             Here every man may be master and owner of his owne labour and land...If he have nothing but his hands, 
             he may...by industrie quickly grow rich.
             More items...</p>  
         <hr style={{boderTop: '3px solid #833fb2', width:'50%'}} />
          <h5> Address</h5>
          <p>1 Federal university otuoke</p>
          <h5>Phone</h5>
          <p>(+123)90390-57449</p>
          <h5>Email</h5>
          <p>ofozormerit1@gmail.com</p>
          <h5>Web</h5>
          <p>mywebsite.com</p>
          <hr style={{boderTop: '3px solid #833fb2', width:'50%'}} />
            </Cell>
            <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
             startYear={2017}
             endYear={2020}
             schoolName='Federal University Otuoke'
             schoolDescription='federal university otuoke Academy is an international public high school for students aged 17-30 (Grades 9-12) with campuses in otuoke (Nigeria), 
             100% of our students are accepted at top international universities. 90% attend their first choice of their lecture.'
             />
              <img
              src="https://media.ef.com/smlp/Images/Academy_graduation_inside-03282017061618640-08122019094640724.jpeg"
              alt="image"
              style={{height: '200px', width:'200px'}}
              /> 
          <hr style={{borderTop: "3px solid #e22947"}} />

            <h2>Experience</h2>

            <Experience 
            startYear={2011}
            endYear={2012}
            jobDescription="Census work very cool but a bit streeful but it was ok."
            />
        <hr style={{borderTop: "3px solid #e22947"}} />


            <h2>Skills</h2>
            <Skills 
            skill="Javascript"
            progress={100}
            />
             <Skills 
              skill="HTML/CSS"
               progress={80}
            />
            <Skills 
               skill="Node.js"
               progress={50}
            />
          <Skills 
              skill="React"
              progress={25}
            />

            </Cell>
         </Grid>
        </div>
        )
    }
}





export default Resume;