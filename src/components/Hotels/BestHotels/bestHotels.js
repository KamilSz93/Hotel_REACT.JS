import { useEffect, useState } from "react";
import moment from "moment";

const BestHotels = (props) => {

    const hotel = props.getHotel();
    
    const endTime = moment().add(23, "minutes").add(34, 'seconds');
    const [time, setTime] = useState('');

    let interval = null;

    useEffect(() => {
        interval = setInterval(() => {
            const leftTime = (-moment().diff(endTime)) / 1000;
            const leftMinutes = Math.floor(leftTime / 60)
            const leftSeconds = Math.floor(leftTime % 60)
            setTime(`minut: ${leftMinutes} sekund: ${leftSeconds}`)
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);


    
    
    if (!hotel) return null;

    return (
      <div className="card bg-success text-white">
            <div className="card-header">
                Najlepsza oferta!
            </div>
            <div className="card-body ">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title  ">{hotel.name }</h5>
                    <p>{hotel.rating }</p>
                </div>
                <p>Do końca oferty pozostało: { time }</p>
                <a href="#"
                    className="btn btn-sm btn-light">Pokaż
                </a>
        </div>
      </div>
    );
}

export default BestHotels;