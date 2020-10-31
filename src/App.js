import React from 'react';
import { Layout, Header, Navigation, Drawer, Content }  from 'react-mdl';
import Main from './components/main'


function App() {

  return (
    <div style={{height: '100vh', position: 'relative'}}>
        <Layout style={{background: 'url(https://w.wallhaven.cc/full/ne/wallhaven-nexjq8.jpg) center / cover'}}>
            <Header transparent title="Solomon Muratov - E-Portfolio" style={{color: 'white'}}>
                <Navigation>
                    <a href="/">Resume</a>
                    <a href="/aboutme">About Me</a>
                    <a href="projects">Projects</a>
                    <a href="/">Contact</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                  <a href="/">Resume</a>
                  <a href="/aboutme">About Me</a>
                  <a href="projects">Projects</a>
                  <a href="/">Contact</a>
                </Navigation>
            </Drawer>
            <Content>
            <div className="page-content" />
            <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
