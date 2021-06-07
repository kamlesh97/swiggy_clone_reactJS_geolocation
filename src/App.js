import React from 'react'
// import Navbar from './components/Navbar'
import Main from './components/Main'
import './index.css'
// import RecipeList from './components/RecipeList'
import Search from './components/Search'
function App() {
  return (
    <div>
      <Main />
      {/* <Navbar />
        
      {/* <RecipeList /> */}
      {/* <Search/> */}
    </div>
  )
}

export default App



// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        lat:null,
//        lng:null,
//        userAddress:null,
//     }
//   }
  
//   getLocation=()=>{
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(this.getCoordinate)
//     }
//     else{
//       alert('geolocation is not supported')
//     }
//   }

//   getCoordinate(position){
//     console.log(position)
//   }


//   render() {
//     return (
//       <div className='App'>
//         <h2>React geolocaion example</h2>
//         <button onClick={this.getLocation}>loc</button>
//         <p>latitude:{this.state.lat}</p>
//         <p>longitude:{this.state.lng}</p>
//         <p>address:{this.state.userAddress}</p>
//       </div>
//     )
//   }
// }

// export default App
