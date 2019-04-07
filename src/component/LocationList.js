import React, { Component } from 'react';
import WeatherLocation from './WeatherLocation/index';

class LocationList extends Component {
    render (){
        return(
            <di className="App">
                <WeatherLocation city="Buenos Aires,ar"/>
                <WeatherLocation city="Bogota,col"/>
                <WeatherLocation city="Mexico,mex"/>
            </di>
        )
    }
}

export default LocationList;