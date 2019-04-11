import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <div className="WeatherLocationCont" onClick={this.props.onWeatherLocationClick}>
                <Location city={city}/> 
                {data ? <WeatherData data={data}/> :  <div class="preloader-wrapper small  active">
                                                        <div class="spinner-layer spinner-blue-only">
                                                            <div class="circle-clipper left">
                                                                <div class="circle"></div>
                                                            </div><div class="gap-patch">
                                                                <div class="circle"></div>
                                                            </div><div class="circle-clipper right">
                                                                <div class="circle"></div>
                                                            </div>
                                                        </div>
                                                    </div>}
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;