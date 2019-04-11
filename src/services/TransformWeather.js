import convert from 'convert-units';
import {SUN, CLOUD, RAIN, SNOW, THUNDER,DRIZZLE} from '../constants/weathers';

const getTempeture = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weatherData => {
    const {id} = weatherData;
    if(id < 300){
        return THUNDER;     
    } else if(id < 400){
        return DRIZZLE;   
    } else if (id < 600){
        return RAIN;  
    }else if (id < 700){
        return SNOW;  
    }else if (id === 800){
        return SUN;  
    }else {
        return CLOUD;
    }
}

const TransformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);
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