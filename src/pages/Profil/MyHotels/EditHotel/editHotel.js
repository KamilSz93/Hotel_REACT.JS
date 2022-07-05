import { useEffect, useRef, useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/loadingButton";
import Input from "../../../../components/Input/input";
import { validate } from "../../../../helpers/validations";
import axios from "../../../../axios";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import HotelForm from "../hotelForm";
import { useParams } from "react-router-dom";


const EditHotel = (props) => {

const { id } = useParams();

const [auth, setAuth] = useAuth();
 
  const [loading, setLoading] = useState(false);
  
  const [hotel, setHotel] = useState(null);

const history = useHistory();

const submit = async form => {
      
   await axios.post("hotele/.json", form);
  history.push("/profil/hotele");
  
   setLoading(false);
  };

  const fetchHotel = async () => {
   const res =  await axios.get(`hotele/${id}.json`)
    console.log(res.data);
    setHotel(res.data)
  }
  
  useEffect(() => {
    fetchHotel();
  },[])

 
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
