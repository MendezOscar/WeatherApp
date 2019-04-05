import React, { Component }from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

class WeatherLocation extends Component{
    render(){
        return(
            <div className="WeatherLocationCont">
                <Location city={'San Pedro Sula'}/> 
                <WeatherData/>
            </div>
        )
    }
}


export default WeatherLocation;