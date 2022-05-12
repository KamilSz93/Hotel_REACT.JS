import React, { Component } from 'react';
import Hotel from './Hotel/hotel';
import styles from './hotels.module.css';

class Hotels extends Component{
    render() {
        return (
            <div className={`${ styles.container } container`}>
                <h2 className={styles.title}>Oferty</h2>
                <Hotel />
                <Hotel />
            </div>
        );
      }
}

export default Hotels;