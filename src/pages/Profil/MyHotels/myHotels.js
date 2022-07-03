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
                       .filter(hotel => hotel.user_Id === auth.userId);
      
    } catch (ex) {
      console.log(ex.responese);
    }
  }

  useEffect(() => {
    fetchHotel();
  }, [])
  

  return (
    <div>
      {hotels ? (
        <table className="table">
          <thead>
            <tr>Nazawa</tr>
            <tr>Opcje</tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr>
                <td>{hotel.name}</td>
                <td>
                  <button className="btn btn-warning">Edytuj</button>
                  <button className=" ms-2 btn btn-danger">Edytuj</button>
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
