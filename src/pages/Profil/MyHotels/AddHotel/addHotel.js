import { useRef, useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/loadingButton";
import Input from "../../../../components/Input/input";
import { validate } from "../../../../helpers/validations";
import axios from "../../../../axios";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const AddHotel = (props) => {

  const [auth, setAuth] = useAuth();

  const [form, setForm] = useState({
    name: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { rule: "min", length: 4 }],
    },
    description: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { rule: "min", length: 10 }],
    },
    city: {
      value: "",
      error: "",
      showError: false,
      rules: ["required"],
    },
    rooms: {
      value: 2,
      error: "",
      showError: false,
      rules: ["required"],
    },
    features: {
      value: [],
      error: "",
      showError: false,
    },
    image: {
      value: null,
      error: "",
      showError: false,
    },
    status: {
      value: 0,
      error: "",
      showError: false,
      rules: ["required"],
    },
  });
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("hotele/.json", {
        name: form.name.value,
        description: form.description.value,
        city: form.city.value,
        rooms: form.rooms.value,
        features: form.features.value,
        status: form.status.value,
        user_Id: auth.userId,
      });
      history.push('/profil/hotele')
      console.log(res);
    } catch (ex) {
      console.log(ex.response)
    }

      setLoading(false);
    
  };

  const changeHandler = (value, fieldName) => {
    const error = validate(form[fieldName].rules, value);

    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        showError: true,
        error: error,
      },
    });
  };

  return (
    <div className="card">
      <div className="card-header">Nowy hotel</div>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>

        <form onSubmit={submit}>
          <Input
            label="Nazwa"
            value={form.name.value}
            onChange={(val) => changeHandler(val, "name")}
            error={form.name.error}
            showError={form.name.showError}
          />

          <Input
            label="Opis"
            type="textarea"
            value={form.description.value}
            onChange={(val) => changeHandler(val, "description")}
            error={form.description.error}
            showError={form.description.showError}
          />

          <Input
            label="Miejscowość"
            value={form.city.value}
            onChange={(val) => changeHandler(val, "city")}
            error={form.city.error}
            showError={form.city.showError}
          />

          <Input
            label="Ilość pokoi"
            value={form.rooms.value}
            type="select"
            onChange={(val) => changeHandler(val, "rooms")}
            options={[
              { value: 1, label: 1 },
              { value: 2, label: 2 },
              { value: 3, label: 3 },
              { value: 4, label: 4 },
            ]}
            error={form.rooms.error}
            showError={form.rooms.showError}
          />

          <h4>Udogodnienia</h4>
          <Input
            type="checkbox"
            value={form.features.value}
            onChange={(val) => changeHandler(val, "features")}
            options={[
              { value: "tv", label: "TV" },
              { value: "wifi", label: "Wi-Fi" },
              { value: "parking", label: "Parking" },
            ]}
            error={form.features.error}
            showError={form.features.showError}
          />

          <h4>Zdjęcie</h4>
          <Input
            type="file"
            onChange={(val) => changeHandler(val, "image")}
            error={form.image.error}
            showError={form.image.showError}
          />

          <h4>Status</h4>
          <Input
            type="radio"
            name="status"
            value={form.status.value}
            onChange={(val) => changeHandler(val, "status")}
            options={[
              { value: "1", label: "Aktywny" },
              { value: "0", label: "Ukryty" },
            ]}
            error={form.status.error}
            showError={form.status.showError}
          />

          <div className="text-right">
            <LoadingButton loading={loading} className="btn-success">
              Dodaj hotel!
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
