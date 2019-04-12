import React, { Component } from 'react';
import LocationList from './component/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import NavBar from './component/NavBar/NavBar';
import ForecastExtended from './component/ForecastExtended';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Mexico,mex',
  'Barcelona,es',
  'Lima,pe'
];
class App extends Component {

  constructor(){
    super();
    this.state={
      city: null
    };
  }

  HandleSelectionLocation = city => {
    this.setState({city});
    console.log(`HandleSelectionLocation ${city}` );
  }

  render() {
    const { city } = this.state
    return (
      <Grid>
          <NavBar/>
        <Row>
          <Col xs={12} md={6}>
          <LocationList cities = {cities} onSelectedLocation={this.HandleSelectionLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <div className="details">
            {city && <ForecastExtended city={city}/>}
            </div>
          </Col>
        </Row>     
      </Grid>
        
    );
  }
}

export default App;
