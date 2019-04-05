import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Location extends Component{

    render(){
        return(
            <div className="LocationCont">
                <h1>{this.props.city}</h1>
            </div>
        )
    }
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location; 