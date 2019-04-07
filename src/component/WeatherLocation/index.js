import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import GetURLWeatherByCity from '../../services/GetURLWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData/index';
import TransformWeather from '../../services/TransformWeather';
import './styles.css';

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }
    
    handleUpdateClick = () => {
        const apiWeather = GetURLWeatherByCity(this.state.city);
        fetch(apiWeather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = TransformWeather(data);
            this.setState ({
                data: newWeather,
            });
        });
    }

    render(){
        const {city, data} =  this.state;
        return(
            <div className="WeatherLocationCont">
                <Location city={city}/> 
                {data ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;