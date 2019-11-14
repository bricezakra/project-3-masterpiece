
import React, { Component } from 'react'
import SideNavigation from './components/SideNavigation';




class App extends Component {
    

    render(){
      return (       
        // <Router>
          <SideNavigation />
        //   <Switch>
        //     <Route path="/" exact component={Home} />
        //     <Route path="/map"  component={SearchableMap} />
        //     <Route path="/about" component={About} />
        //     <Route path="/shop" component={Shop} />
        //   </Switch>
        // </Router>
      )
    }
}



export default App;