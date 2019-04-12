import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ForecastItem from './ForecastItem/index';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}*/

const apiKey = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const urlForecast = `${url}?q=${this.props.city}&appid=${apiKey}`;
        fetch(urlForecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                console.log(weatherData);
            }
        )
    }
    

    renderForecastItemDays(){
       /* return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}/>)*/
       return "Render Item"
    }

    renderProgress = () =>{ 
        return <h5>CARGANDO PRONOSTICO EXTENDIDO...</h5>
    }

    render() {
        const { city } = this.props;
        const { forecastData } =  this.state;
        return (
            <div>
                <h5 className='forecast-title'>
                    Pronostico Extendido para {city}
                </h5> 
                {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;