import React, { useEffect, useContext } from "react";
import LastHotel from "../../components/Hotels/LastHotel/lastHotel";
import useStateStorage from "../../hooks/useStateStorage";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import BestHotels from "../../components/Hotels/BestHotels/bestHotels";
import Hotels from "../../components/Hotels/hotels";
import ReducerContext from "../../context/reducerContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

const backendHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Warszawa",
    rating: 6.2,
    description:
      "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
    image: "",
  },
  {
    id: 2,
    name: "Dębowy",
    city: "Lublin",
    rating: 5.9,
    description:
      "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
    image: "",
  },
];

export default function Home(props) {

  const [lastHotel, setLastHotel] = useStateStorage("Last Hotel", null);
  const reducer = useContext(ReducerContext);

  useWebsiteTitle("Strona");

  const getBestHotel = () => {
    if (reducer.state.hotels.length < 2) {
      return null;
    } else {
      return reducer.state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
    }
  };

  const openHotel = (hotel) => setLastHotel(hotel);

  const removeLastHotel = () => setLastHotel(null);

  useEffect(() => {
    setTimeout(() => {
      reducer.dispath({ type: "set-hotels", hotels: backendHotels });
      reducer.dispath({ type: "set-loading", loading: false });
    }, 1000);
  }, []);

  if (reducer.state.loading) return null;

  return (
    <>
      {lastHotel ? (
        <LastHotel {...lastHotel} onRemove={removeLastHotel} />
      ) : null}
      {getBestHotel() ? <BestHotels getHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
    </>
  );
}
