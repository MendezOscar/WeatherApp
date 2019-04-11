import React, { Component } from 'react';
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';


class LocationList extends Component {
    render (){

        const HandleWeatherLocationClick = (city) => {
            console.log("HandleWeatherLocationClick");
            this.props.onSelectedLocation(city);
        }
    
        const strToComponents = cities => (
            cities.map(city => <WeatherLocation key={city} city = {city} 
                onWeatherLocationClick={()=>HandleWeatherLocationClick(city)} />)
        );

        return(
            <div className="App">
               {strToComponents(this.props.cities)}
            </div>
        )
    }
}

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;