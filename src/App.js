import React, { Component } from 'react';
import LocationList from './component/LocationList';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Mexico,mex',
  'Barcelona,es',
  'Lima,pe'
];
class App extends Component {
  HandleSelectionLocation = city => {
    console.log(`HandleSelectionLocation ${city}` );
  }

  render() {
    return (
      <div>
        <div className="App">
            <LocationList cities = {cities} onSelectedLocation={this.HandleSelectionLocation}/>
          </div>
      </div>
        
    );
  }
}

export default App;
