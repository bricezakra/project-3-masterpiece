import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import SearchableMap from './SearchableMap';
import Contacts from './Contacts';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from './Home'


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
                        style={{ height: 1200 }}
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
                        <Route path="/map" component={props => <SearchableMap />} />                    </main>
                </React.Fragment>
            )}
            />
        </Router>

        
    )
}


export default SideNavigation