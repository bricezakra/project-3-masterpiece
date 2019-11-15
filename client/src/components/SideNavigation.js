import React from 'react';
// import { Link } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Shop from './AdvenTour';
import SearchableMap from './SearchableMap';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


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
                            <NavItem eventKey="shop">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    AdvenTour
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
                        <Route path="/shop" component={props => <Shop />} />
                        <Route path="/map" component={props => <SearchableMap />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>

        // <nav>
        //     <h3> navbar </h3>
        //     <ul>
        //         <Link to='/about'>
        //             <li>About</li>
        //         </Link>
        //         <Link to='/map'>
        //             <li>Map</li>
        //         </Link>
        //         <Link to='/shop'>
        //             <li>Shop</li>
        //         </Link>
        //     </ul>
        // </nav>
    )
}

const Home = () => (
    <div style={{ marginLeft: 64 }}>
      <h1 > Home Page</h1>
    </div>
  )

export default SideNavigation