import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon  from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import { objectsToArrayWithId } from "../../helpers/objects";
import axios from "../../axios";
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';


function Hotel(props) {

  const history = useHistory();
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useAuth();
  const [rating, setRating] = useState(5);

  

  const setTitle = useWebsiteTitle();
  
  const fetchHotel = async () => {
    try {
      const res = await axios.get(`/hotele/${id}.json`);
      setHotel(res.data);
      setTitle('Hotel - ' + res.data.name);
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false);
  }

  const rateHotel = async () => {
    try
    {
      await axios.put(`/hotele/${id}/rating.json?auth.token=${auth.token}`, rating );
      history.push('/');
    } catch (ex) {
      console.log(ex.response)
    }
    

  }
    
  useEffect(() => {
    fetchHotel()
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <div className="card">
      <div className="card-header">
        <h1>Hotel: {hotel.name}</h1>
      </div>
      <div className="card-body">
        <img
          src={`http://placeimg.com/880/25${Math.floor(
            Math.random() * 10
          )}/any`}
          alt=""
          className="img-fluid img-thumbnail"
        />
        <p>
          Miejscowość: <b>{hotel.city}</b>
        </p>
        <p>
          {" "}
          Pokoje: <b>{hotel.rooms}</b>
        </p>
        <p className="lead">{hotel.description}</p>
        <p>Wyposażenie</p>
        <ul>
          {hotel.features.map((el) => (
            <li key={el}> {el} </li>
          ))}
        </ul>
        <h4>Ocena: {props.rating ?? "brak ocen"}</h4>
      </div>
      <div className="card-footer">
        {auth ? (
          <div className="form-group row mt-4">
            <div className="col">
                <select
                  value={rating}
                  onChange={e=>setRating(e.target.value)}
                  className="form-control form-select-lg mb-3">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </div>
              <div className='col'>
                <button className='btn btn-info' onClick={rateHotel}>Oceń</button>
              </div>
          </div>
        ) : null}
      </div>
    </div>
  );
  };
  
  
  
  
  
  //  < h1 > Hotel: { hotel.name }</h1 >;


export default Hotel;