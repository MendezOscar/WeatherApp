import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class WeatherExtraInfo extends Component{
    render(){
        return(
            <div className="weatherExtraInfoCont">
                <span className="extraInfoText">{`Humedad: ${this.props.humidity} %  `}</span>
                <span className="extraInfoText">{`Viento: ${this.props.win}`}</span>
            </div>
        )
    }
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    win: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;