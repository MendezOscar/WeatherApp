import convert from 'convert-units';
import {SUN} from '../constants/weathers';

const getTempeture = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weatherData => {
    return SUN;
}

const TransformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = getWeatherState(weatherData);
    const temperature = getTempeture(temp);
    const data ={
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default TransformWeather;