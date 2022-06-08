import  { useState }  from 'react'
import useStateStorage from '../../../hooks/useStateStorage';

function LastHotel(props) {

   // const [hotel, setHotel] = useStateStorage(null)
    
    const hotel = { name: 'Test', city: 'Kraków' }
    
    if (!hotel) return null;

    return (
      <div className="card bg-light">
        <div className="card-header">Ostatnio ogladana oferta</div>
        <div className="card-body ">
          <div className="d-flex justify-content-between">
            <h5 className="card-title  ">{hotel.name}</h5>
            <span className="badge bg-light text-dark">{hotel.city}</span>
          </div>
                <div
                    style={{width: '100px'}}
                    className=" ms-auto d-flex justify-content-between">
            <a href="#" className="btn btn-sm btn-dark">
              Tak!
            </a>
            <a href="#" className="btn btn-sm btn-dark">
              Nie!
            </a>
          </div>
        </div>
      </div>
    );
    
}

export default LastHotel;