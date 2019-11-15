import React from 'react'
import SideNavigation from './components/SideNavigation';
import { useAuth0 } from "./components/react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <header>
        <SideNavigation />
      </header>
    </div>
  );
}



export default App;