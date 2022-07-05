import { useRef, useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/loadingButton";
import Input from "../../../../components/Input/input";
import { validate } from "../../../../helpers/validations";
import axios from "../../../../axios";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import HotelForm from "../hotelForm";


const AddHotel = (props) => {

  
const [auth, setAuth] = useAuth();
 
  const [loading, setLoading] = useState(false);

  const history = useHistory();

    const submit = async form => {
      
        await axios.post("hotele/.json", form);
        history.push("/profil/hotele");
      
      setLoading(false);
    };

 
  return (
    <div className="card">
      <div className="card-header fs-3 fw-bold">Dodaj hotel</div>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>

        <HotelForm
          buttonText="Dodaj"
          onSubmit={submit} />
        
      </div>
    </div>
  );
};

export default AddHotel;
