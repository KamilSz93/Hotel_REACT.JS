import { useEffect , useState } from "react";
import axios from "../../../../axios";
import { useHistory } from "react-router-dom";
import HotelForm from "../hotelForm";
import { useParams } from "react-router-dom";


const EditHotel = props => {

const { id } = useParams();  
const [hotel, setHotel] = useState(null);
const history = useHistory();

const submit = async form => {
  await axios.put(`/hotele/${id}.json`, form);
  history.push("/profil/hotele");
  };

  const fetchHotel = async () => {
    const res =  await axios.get(`/hotele/${id}.json`)
    const hotelData = res.data;
    delete (hotelData.user_id);

    setHotel(hotelData)
  }
  
  useEffect(() => {
    fetchHotel();
  }, []);

 
return (
    <div className="card">
      <div className="card-header fs-3 fw-bold">Edytuj hotel</div>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>

      <HotelForm
          hotel={hotel}
          buttonText="Zapisz"
          onSubmit={submit} />
      </div>
    </div>
  );
};

export default EditHotel;
