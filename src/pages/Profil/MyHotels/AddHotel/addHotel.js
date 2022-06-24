import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

const AddHotel = (props) => {
    return (
      <div className="card">
        <div className="card-header">Nowy hotel</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Nazwa</label>
              <input
                type="text"
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
              <div className="'invalid-feedback">Bład</div>
            </div>

            <div className="form-group">
              <label>Miejscowaść</label>
              <input
                type="text"
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
              <div className="'invalid-feedback">Bład</div>
            </div>

            <div className="form-group">
              <label>Ilość pokoi</label>
              <input
                type="text"
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
              <div className="'invalid-feedback">Bład</div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddHotel;