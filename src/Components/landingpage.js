import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import Avatar from './avataaars.png';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={Avatar} alt='avatar' className='avatar-img'/>
            
            <div className="banner-text">
                <h1>Junior Developer</h1>
          
            <hr/>
            <p>HTM/CSS | JavaScript | React | NodeJS</p>
        <div className='social-links'>
                {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                
                {/* GitHub */}
                </a>
                <a href="http://google.com" rel="noopener noreferer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
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