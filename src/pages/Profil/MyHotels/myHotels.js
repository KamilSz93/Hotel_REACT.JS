import {Link, useRouteMatch } from 'react-router-dom' 

export default function MyHotels(props) {

  const { url } = useRouteMatch();

  return (
    <div>
      <p>Nie masz jeszcze żadnego hotelu.</p>
      <Link to={`${url}/doadaj`} className="btn btn-primary" >Dodaj Hotel</Link>
    </div>
  );
}
