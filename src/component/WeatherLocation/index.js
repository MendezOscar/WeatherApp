import React, { Component }from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {SUN} from '../../constants/weathers';
import './styles.css';

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 15,
    wind: '10 m/s',
}

class WeatherLocation extends Component{
    render(){
        return(
            <div className="WeatherLocationCont">
                <Location city={'San Pedro Sula'}/> 
                <WeatherData data={data}/>
            </div>
        )
    }
}


export default WeatherLocation;