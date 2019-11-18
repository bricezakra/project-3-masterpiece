import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Background from '../images/background_image.png';

function Home() {
    return (<div style={{ marginLeft: 64, backgroundImage: `url(${Background})` }}>
       <Jumbotron>
                <h1 className="display-3">Welcome to Wi-finder</h1>
                <p className="display-5">Use the sidenav to navigate our app.</p>
        </Jumbotron>
        <div style={{ height: 1000 }}>

        </div>
        
    </div>);
};

  export default Home