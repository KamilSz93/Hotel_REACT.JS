import React, {useState, useEffect, useContext } from "react";
import LastHotel from "../../components/Hotels/LastHotel/lastHotel";
import useStateStorage from "../../hooks/useStateStorage";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import BestHotels from "../../components/Hotels/BestHotels/bestHotels";
import Hotels from "../../components/Hotels/hotels";
import ReducerContext from "../../context/reducerContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import axios from '../../axios';
import { objectsToArrayWithId } from "../../helpers/objects";


export default function Home(props) {

  const [lastHotel, setLastHotel] = useStateStorage("Last Hotel", null);
  const reducer = useContext(ReducerContext);

  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);

  useWebsiteTitle("Strona główna");

  const getBestHotel = () => {
    if (hotels.length < 2) {
      return null;
    } else {
      return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
    }
  };

  const openHotel = (hotel) => setLastHotel(hotel);
  const removeLastHotel = () => setLastHotel(null);

  const fetchHotels = async () => {
    try {
      const res = await axios.get('/hotele.json');
      const newHotel = objectsToArrayWithId(res.data)
        .filter(hotel => hotel.status == 1);
      ///brak ścisłego porownania moze być pobierana jako string !!!
      setHotels(newHotel)
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchHotels();
  }, []);

  return loading ? <LoadingIcon/> : (
    <>
      { lastHotel ? <LastHotel {...lastHotel} onRemove={removeLastHotel} />
       : null }
      {getBestHotel() ? <BestHotels getHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={hotels} />
    </>
  );
}
