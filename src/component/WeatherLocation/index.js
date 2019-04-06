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

const location = "Buenos Aires,ar";
const apiKey = "f99bbd9e4959b513e9bd0d7f7356b38d";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";
const apiWeather = `${urlBaseWeather}?q=${location}&appid=${apiKey}`;

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: "Tegucigalpa",
            data: data,
        };
    }

    getWeatherState = weatherData => {
        return SUN;
    }

    getData = weatherData => {
        const { humidity, temp } = weatherData.main;
        const { speed } = weatherData.wind;
        const weatherState = this.getWeatherState(weatherData);
        const data ={
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handleUpdateClick = () => {
        fetch(apiWeather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
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
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}


export default WeatherLocation;