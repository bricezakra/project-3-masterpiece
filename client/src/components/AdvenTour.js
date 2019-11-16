import React from 'react';
// import { SplitButton, MenuItem } from 'react-bootstrap';

// class AdvenTour extends Component {

//     state = { theme: null }
    
//     chooseTheme = (theme, evt) => {
//       evt.preventDefault();
//       if (theme.toLowerCase() === 'reset') { theme = null }
//       this.setState({ theme });
//     }
    
//     render() {
    
//       const { theme } = this.state;
//       const themeClass = theme ? theme.toLowerCase() : 'default';
      
//       const parentContainerStyles = {
//         position: 'absolute',
//         height: '100%',
//         width: '100%',
//         display: 'table'
//       };
      
//       const subContainerStyles = {
//         position: 'relative',
//         height: '100%',
//         width: '100%',
//         display: 'table-cell',
//         verticalAlign: 'middle'
//       };
      
//       return (
//         <div style={parentContainerStyles}>
//           <div style={subContainerStyles}>
          
//             <span className={`h1 center-block text-center text-${theme ? themeClass : 'muted'}`} style={{ marginBottom: 25 }}>{theme || 'Default'}</span>
            
//             <div className="center-block text-center">
//               <SplitButton bsSize="large" bsStyle={themeClass} title={`${theme || 'Default'} Theme`}>
//                 <MenuItem eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</MenuItem>
//                 <MenuItem eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</MenuItem>
//                 <MenuItem eventKey="Success" onSelect={this.chooseTheme}>Success Theme</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</MenuItem>
//               </SplitButton>
//             </div>
            
//           </div>
//         </div>
//       );
      
//     }
    
//   }
  
//   export default AdvenTour;


function AdvenTour () {
    return (
        <div style={{ marginLeft: 64 }}>
            <h1> Travel Tour </h1>
            <div>Welcome to Our most amazing app but yet simple!</div>
            <ul>
                <li>
                    About
                </li>
               <div> AdvenTour is Travel tour, that let's you live life with no excuses, and travel with no regret.
                    
               </div>
               <ul>
                   <li>Sometimes you will never know the value of a moment until it becomes a memory</li>

               </ul>
               <ul>
                   <li>
                       
                   </li>
               </ul>
               

            </ul>
            </div>
        
    )
}

export default AdvenTour