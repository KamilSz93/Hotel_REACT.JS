import { useEffect, useState } from "react";
import LoadingButton from "../../../components/UI/LoadingButton/loadingButton";
import validateEmail from "../../../helpers/validations";

export default function ProfileDetails(props) {

  const [email, setEmail] = useState('kamil123.93@o2.pl');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password:'',
  });



  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
   //zapisywanie
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (validateEmail(email)) {
             setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: 'Niepoprawny email' });
     }
  }, [email]);

  useEffect(() => {
    if (password.length >= 4 || !password ) {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Wymagane 4 znaki" });
    }
  }, [password]);

  const buttonDisabled = Object.values(errors).filter(x=>x).length;

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className={`form-control ${
            errors.email ? "is-invalid" : "is-valid"
          } `}
        />
        <div className="invalid-feedback">{errors.email}</div>
        <div className="valid-feedback">Wszystko gra</div>
      </div>
      <div className="form-group is-valid">
        <label>Hasło</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className={`form-control ${ errors.password ? "is-invalid" : "" } `}
        />
        <div className="invalid-feedback">{errors.password}</div>
      </div>
      <LoadingButton
        log={loading}
        disabled={buttonDisabled}> Zapisz </LoadingButton>
    </form>
  );
}
