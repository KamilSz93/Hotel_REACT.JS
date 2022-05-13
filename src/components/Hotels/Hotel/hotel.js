import React from 'react';
import styles from './hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel() {
  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img src={hotelImg} alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>Pensjonat</p>
                <span className="badge bg-light text-dark">Miasto</span>
              </div>
              <div className="col text-end">
                <p>
                  <span className="badge bg-secondary">Ocena 5.8</span>
                </p>
                <a href="#" className="btn btn-primary float-end mt-2 px-5">
                  Pokaz.
                </a>
              </div>
            </div>
          </div>

          <div className="col-12">
            <p className={styles.description}>
              Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt
              nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore
              magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est
              quis mollit veniam tempor adipisicing sint non ut qui id ad culpa
              minim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;