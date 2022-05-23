import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styles from './hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};


function Hotel(props) {
   
  const color = useContext(ThemeContext)

  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            {props.missign}
            <img src={hotelImg} alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{props.name}</p>
                <span className="badge bg-light text-dark">{props.city}</span>
              </div>
              <div className="col text-end">
                <p>
                  <span className="badge bg-secondary">{props.rating}</span>
                </p>
                    <a href="#"
                      className={`btn btn-${color.theme} float-end mt-2 px-5`} >
                      Pokaz.
                    </a>
              </div>
            </div>
          </div>

          <div className="col-12">
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Hotel.propTypes = propTypes;

export default Hotel;