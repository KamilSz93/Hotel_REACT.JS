import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Hotel from './Hotel/hotel';
import styles from './hotels.module.css';

const propTypes = {
    hotels: PropTypes.array.isRequired
}

class Hotels extends Component{
    render() {
        return (
            <div className={`${ styles.container } container`}>
                <h2 className={styles.title}>Oferty</h2>
                {this.props.hotels.map(hotel =>
                    <Hotel
                    key={hotel.id}{...hotel}
                    theme={this.props.theme}
                    />)}
            </div>
        );
      }
}

Hotels.propTypes = propTypes;

export default Hotels;