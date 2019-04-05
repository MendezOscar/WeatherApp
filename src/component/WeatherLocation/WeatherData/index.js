import React, { Component } from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {SUN} from '../../../constants/weathers';
import './styles.css';

class WeatherData extends Component{
    render(){
        return(
            <div className="weatherDataCont">
                <WeatherTemperature temperature={20} weatherState={SUN}/>
                <WeatherExtraInfo humidity={80} win={'10 m/s'}/>
            </div>
        )
    }
}

export default WeatherData;