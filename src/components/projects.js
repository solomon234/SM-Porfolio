import React, {Component} from 'react';
import { Tabs, Tab, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Cell, Link } from 'react-mdl';
import Radium from 'radium';
import Aboutme from './aboutme'

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: '#0074d9'
    }
  },
  titleCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 0,
    height: '50px',
    background: 'black',
    opacity: 0.3,
    textAlign: 'center',
    fontSize: '3em',
        ':hover': {
          background: 'red'
        }
      }
}


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0    
    };
  }
  // handleClick = () => {
  //   console.log('this is:', this);
  // }
  // handleMouseEnter = (e) => {
  //   const width = this.refs.category.clientWidth;
  //   const height = this.refs.category.clientHeight;
  //   const ox = e.nativeEvent.offsetX/width * 100;
  //   const oy = e.nativeEvent.offsetY/height * 100;
  //
  //   //onsole.log(e.nativeEvent);
  // }


  toggleCategories(){
    switch(this.state.activeTab){
      case(0):
        return(
          <Grid col={12}>
            <Cell col={6} >
              <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                  <CardTitle style={{position:'relative',color: '#fff', height: '300px', background: `url(https://i.imgur.com/zXCpmfo.png) center / cover`  }}>
                  <CardText style={styles.base}>
                  Internet Cafe POS
                  </CardText>
                  </CardTitle>
                  <CardText>
                      A WPF application that handles payments with Stripe.NET and has a timer that will jump to the payment screen when complete.
                  </CardText>
                  <CardActions border>
                      <Button colored>github</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
            </Cell>
            <Cell col={6}>
              <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                  <CardTitle style={{position:'relative',color: '#fff', height: '300px', background: `url(https://i.imgur.com/zXCpmfo.png) center / cover`  }}>
                  <div style={styles.titleCard}>
                    WPF
                  </div>
                  </CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button colored>Get Started</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
            </Cell>
          </Grid>
      )
      case(1):
        return(
          <Grid col={12}>
          <Cell col={6} >
            <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{position:'relative',color: '#fff', height: '300px', background: `url(https://i.imgur.com/zXCpmfo.png) center / cover`  }}>
                <CardText style={styles.base}>
                </CardText>
                </CardTitle>
                <CardText>
                    A WPF application that handles payments with Stripe.NET and has a timer that will jump to the payment screen when complete.
                </CardText>
                <CardActions border>
                    <a href="https://solomon234.github.io/Battlestations/" />
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
          </Cell>
          <Cell col={6}>
            <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{position:'relative',color: '#fff', height: '300px', background: `url(https://i.imgur.com/zXCpmfo.png) center / cover`  }}>
                <div style={styles.titleCard}>
                  WPF
                </div>
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
          </Cell>
        </Grid>
      )
      default:
        return null;
    }
  }
CardText = Radium(CardText);
  render(){
    return(
      <div onMouseMove={this.handleMouseEnter} className="category-tabs" ref="category">
        <Tabs activeTab={ this.state.activeTab } onChange={( tabId ) => this.setState({ activeTab:tabId })}ripple >
          <Tab>WPF</Tab>
          <Tab>Websites</Tab>
        </Tabs>
        <div>
          {this.toggleCategories()}          
        </div>
      </div>
    )
  }
}

export default Projects;
