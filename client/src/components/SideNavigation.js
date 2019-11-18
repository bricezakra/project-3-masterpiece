import React from 'react';
// import { Link } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import SearchableMap from './SearchableMap';
import Contacts from './Contacts';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Background from '../images/background_image.png';


function SideNavigation() {
    return (
        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            
                            <NavItem eventKey="about">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    About
                        </NavText>
                            </NavItem>
                            <NavItem eventKey="contacts">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Contact Us
                        </NavText>
                            </NavItem>
                            <NavItem eventKey="map">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                   Wifi Map
                        </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/" exact component={props => <Home />} />
                        <Route path="/about" component={props => <About />} />
                        <Route path="/contacts" component={props => <Contacts />} />
                        <Route path="/map" component={props => <SearchableMap />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>

        
    )
}

const Home = () => (
    <div style={{ marginLeft: 64, backgroundImage: `url(${Background})` }}>
       <Jumbotron>
                <h1 className="display-3">Welcome to Wi-finder</h1>
                <p className="display-5">Use the sidenav to navigate our app.</p>
               
        </Jumbotron>
        <div style={{ height: 1000 }}>

        </div>
        
    </div>
  )

export default SideNavigation