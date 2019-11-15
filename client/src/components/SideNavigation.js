import React from 'react';
// import { Link } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Shop from './Shop';
import SearchableMap from './SearchableMap';
import Profile from "./Profile";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useAuth0 } from "./react-auth0-spa.js";

const SideNavigation = () => {
    const { loginWithRedirect, logout } = useAuth0();

    return (
        <div>

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

                             <NavItem onClick={() => loginWithRedirect({})}>
                                    <NavIcon>
                                        <i  className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Login
                            </NavText>
                                </NavItem>
                                <NavItem onClick={() => logout()}>
                                    <NavIcon>
                                        <i  className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Logout
                                </NavText>
                                </NavItem>
                                
                                <NavItem eventKey="about">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        About
                        </NavText>
                                </NavItem>
                                <NavItem eventKey="shop">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Shop
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
                                <NavItem eventKey="profile">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-profile" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        profile
                        </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>

                        <main>
                            <Route path="/" exact component={props => <Home />} />
                            <Route path="/about" component={props => <About />} />
                            <Route path="/shop" component={props => <Shop />} />
                            <Route path="/map" component={props => <SearchableMap />} />
                            <Route path="/profile" component={Profile} />
                        </main>

                    </React.Fragment>
                )}
                />
            </Router>
            <div>
                

                
            </div>
        </div>


    )
}

const Home = () => (
    <div style={{ marginLeft: 64 }}>
        <h1 > Home Page</h1>
    </div>
)

export default SideNavigation