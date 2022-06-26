import LoadingButton from "../../../../components/UI/LoadingButton/loadingButton";
import { useState, useRef } from "react";

const AddHotel = (props) => {

  const imageRef = useRef();

  const [form, setForm] = useState({
    name: '',
    description: '',
    city: '',
    rooms: 2,
    features: [],
    image: null,
    status: 0,
  })

  const [loading, setLoading] = useState(false);

  const submit = e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
      console.log(form)
    },500)
  }

  const changeFeatureHandler = e => {

    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      const newFeatures = [...form.features, value]
      setForm({...form, features: newFeatures })
    } else {
      const newFeatures = form.features.filter((x) => x !== value);
      setForm({ ...form, features: newFeatures });
    } 
  }

    return (
      <div className="card">
        <div className="card-header">Nowy hotel</div>
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Nazwa</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
            </div>

            <div className="form-group">
              <label>Opis</label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                type="text"
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
            </div>

            <div className="form-group">
              <label>Miejscowaść</label>
              <input
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                type="text"
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
            </div>

            <div className="form-group">
              <label>Ilość pokoi</label>
              <select
                value={form.rooms}
                onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                className="form-control"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <h3>Udogodnienia</h3>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  value="tv"
                  type="checkbox"
                  checked={form.features.find((x) => x === "tv")}
                  onChange={changeFeatureHandler}
                  id="tv"
                />
                <label className="custom-control-label" for="tv">
                  TV
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  id="wifi"
                  value="wifi"
                  type="checkbox"
                  checked={form.features.find((x) => x === "wifi")}
                  onChange={changeFeatureHandler}
                />
                <label className="custom-control-label" for="wifi">
                  WiFi
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  id="parking"
                  value="parking"
                  type="checkbox"
                  checked={form.features.find((x) => x === "parking")}
                  onChange={changeFeatureHandler}
                />
                <label className="custom-control-label" for="parking">
                  Parking
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Zdjęcie</label>
              <input
                type="file"
                ref={imageRef}
                onChange={(e) => setForm({ ...form, image: e.target.files })}
              />
            </div>

            <h3>Status</h3>
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  is="status-active"
                  name="status"
                  value="1"
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  checked={form.status == 1}
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="status-active">
                  Aktywny
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  is="status-hide"
                  name="status"
                  value="0"
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  checked={form.status == 0}
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="status-hide">
                  Nieaktywny
                </label>
              </div>
            </div>

            <div className="text-end">
              <LoadingButton Loading={loading} className="btn-success">
                Dodaj Hotel
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddHotel;