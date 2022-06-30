import { useState } from "react";
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import LoadingButton from "../../../components/UI/LoadingButton/loadingButton";
import axiosFresh from "axios";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useAuth();
  const history = useHistory();
  const [valid, setValid] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const res = await axiosFresh.post('', {
        email: '',
        password:'',
      })
    } catch (ex) {
      console.log(ex.response);
    }
    
    /*setTimeout(()=> {
      if (true) {
        setAuth(true);
        history.push('/');
      } else {
        setValid(false);
        setPassword("");
      }  */
    
        
  };

  return (
    <div>
      <h2>Logowanie</h2>
      {valid === false ? (
        <div className="alert alert-danger">Niepoprawne dane logowania</div>
      ) : (null)
      }
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Hasło</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>
        <LoadingButton log={ loading } > Zaloguj </LoadingButton>
      </form>
    </div>
  );
}
