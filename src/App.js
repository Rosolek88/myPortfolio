import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './Components/main';
import {Link} from 'react-router-dom';




function App() {

  return (
<div className="main-content">
    <Layout>
        <Header className='header-color' title="MY PORTFOLIO" scroll>
            <Navigation>
                <Link to='./resume'>Resume</Link>
                <Link to='./about'>About Me</Link>
                <Link to='./projects'>Projects</Link>
                <Link to='./contact'>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to='./resume'>Resume</Link>
                <Link to='./about'>About Me</Link>
                <Link to='./projects'>Projects</Link>
                <Link to='./contact'>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
