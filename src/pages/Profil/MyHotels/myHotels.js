import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import axios from '../../../axios'; 
import { objectsToArrayWithId } from '../../../helpers/objects';
import  useAuth  from "../../../hooks/useAuth"; 

export default function MyHotels(props) {

  const { url } = useRouteMatch();
  const [hotels, setHotels] = useState([]);
  const [auth, setAuth] = useAuth();
  

  const fetchHotel = async () => {
    try {
      const res = await axios.get("hotele/.json");

      const newHotel = objectsToArrayWithId(res.data)
        .filter(hotel => hotel.user_id === auth.userId);
        
        setHotels(newHotel);
      
    } catch (ex) {
      console.log(ex.responese);
    }
  }

  const deleteHandler = async id => {
    try {
      await axios.delete(`hotele/${id}.json`);
      setHotels(hotels.filter(x => x.id !== id));

    } catch (ex) {
      console.log(ex.response)
    }
  }
  

  useEffect(() => {
    fetchHotel();
  }, []);

  
  return (
    <div>
      {hotels ? (
        <table className="table">
          <thead>
            <tr>
              <th>Nazawa</th>
              <th>Status</th>
              <th>Opcje</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr>
                <td>{hotel.name}</td>
                <td>{hotel.status == 1 ? (<span className='badge bg-success '>Aktywny</span>)
                                       : (<span className='badge bg-danger'>Nie aktywny</span>)}
                </td>
                <td>
                  <Link to={`/profil/hotele/edytuj/${hotel.id}`} className="btn btn-warning">
                    Edytuj
                  </Link>
                  <button
                    className=" ms-2 btn btn-danger"
                    onClick={() => deleteHandler(hotel.id)}>
                    Usuń
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nie masz jeszcze żadnego hotelu.</p>
      )}

      <Link to={`${url}/dodaj`} className="btn btn-primary">
        Dodaj Hotel
      </Link>
    </div>
  );
}
