import React, { Component }from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUDY, RAIN, SNOW, SUN, CLOUD, WINDY} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';


const icons = {
    [SUN]: "day-sunny",
    [RAIN]: "rain", 
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const sizeIcon = "4x";
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else 
    return <WeatherIcons className="wicon" name='day-sunny' size={sizeIcon}/>
}


class WeatherTemperature extends Component{
    render(){
        return(
            <div className="weatherTemperatureCont">
                {getWeatherIcon(this.props.weatherState)}
                <span className="temperature"> {`${this.props.temperature}`} </span> 
                <span className="temperatureType"> {` C°`} </span>
            </div>
        )
    }
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;