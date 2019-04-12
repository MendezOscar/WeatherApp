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
                {data ? <WeatherData data={data}/> :  <div className="preloader-wrapper small  active">
                                                        <div className="spinner-layer spinner-blue-only">
                                                            <div className="circle-clipper left">
                                                                <div className="circle"></div>
                                                            </div><div className="gap-patch">
                                                                <div className="circle"></div>
                                                            </div><div className="circle-clipper right">
                                                                <div className="circle"></div>
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