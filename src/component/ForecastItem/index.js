import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';


class index extends Component {
    render() {
        const { weekDay, hour, data } = this.props;
        return (
            <div>
                <div>{weekDay} Hora: {hour} hs </div>
                <WeatherData data={data}/>
            </div>
        );
    }
}

index.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default index;