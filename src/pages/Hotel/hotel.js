import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon  from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

function Hotel(props) {

  const params = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const setTitle = useWebsiteTitle();
  
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
        setTitle('Hotel-Dębowy');    
        setLoading(false)
  }
    
    useEffect(() => {
        setTimeout(() => {
            fetchHotel();
        },500)
    }, []);

    return loading ? <LoadingIcon/> : <h1>Hotel: { hotel.name}</h1>;
}

export default Hotel;