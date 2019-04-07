import { urlBaseWeather, apiKey } from '../constants/APIUrl';

const GetURLWeatherByCity = city => {
    return `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
}

export default GetURLWeatherByCity;