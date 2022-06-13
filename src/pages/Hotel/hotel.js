import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ReducerContext from "../../context/reducerContext";
import LoadingIcon  from '../../components/UI/LoadingIcon/LoadingIcon';

function Hotel(props) {

    const params = useParams();
    const [hotel, setHotel] = useState({});

    const reducer = useContext(ReducerContext);

    const fetchHotel = () => {
         //pobieranie danych
        setHotel({
          id: 2,
          name: "Dębowy",
          city: "Lublin",
          rating: 5.9,
          description:
            "Aliquip adipisicing veniam quis in est nisi. Eu aliqua deserunt nostrud laborum ut aute. Aliquip labore fugiat ipsum dolor labore magna sunt cillum nulla occaecat fugiat culpa aute occaecat. Est quis mollit veniam tempor adipisicing sint non ut qui id ad culpa minim.",
          image: "",
        });
         reducer.dispath({ type: "set-loading", loading: false });

    }

    console.log(params)

    useEffect(() => {
        reducer.dispath({ type: "set-loading", loading: true });

        setTimeout(() => {
            fetchHotel();
        },500)
    }, []);

    if (reducer.state.loading) return null;
    
    return <h1>Hotel: { hotel.name}</h1>;
}

export default Hotel;