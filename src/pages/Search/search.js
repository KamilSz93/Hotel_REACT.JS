import { useParams } from 'react-router-dom';
import { objectsToArrayWithId } from '../../helpers/objects';
import axios from "../../axios";
import { useEffect, useState } from 'react';
import Hotels from "../../components/Hotels/hotels";


export default function Search(props) {

  const { term } = useParams();
  const [hotels, setHotels] = useState([]);
  

  const searchHandler = async () => {
    try {
      const res = await axios.get('/hotele.json');
      const newHotel = objectsToArrayWithId(res.data)
                      .filter(hotel => hotel.name.includes(term) );
      setHotels(newHotel)
      console.log(newHotel);
    } catch (ex) {
      console.log(ex.response)
    }
  };

  useEffect(() => {
    searchHandler();
  },[term])
  
    return (
        <div>
        wyniki wyszukiwania : {term}
        <Hotels  hotels={hotels} />
        </div>
    )
}
