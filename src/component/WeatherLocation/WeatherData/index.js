import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

class WeatherData extends Component{
    render(){
        return(
            <div className="weatherDataCont">
                <WeatherTemperature temperature={this.props.data.temperature} 
                weatherState={this.props.data.weatherState}/>
                <WeatherExtraInfo humidity={this.props.data.humidity} 
                win={this.props.data.wind}/>
            </div>
        )
    }
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;