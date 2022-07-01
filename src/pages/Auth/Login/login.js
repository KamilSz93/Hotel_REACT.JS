import { useState } from "react";
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import LoadingButton from "../../../components/UI/LoadingButton/loadingButton";
import axios from "../../../axios-Auth";

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useAuth();
  const history = useHistory();
  const [valid, setValid] = useState(null);

  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const res = await axios.post('accounts:signInWithPassword',
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      console.log(res);

      setAuth( {
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      });
      history.push('/');
    } catch (ex) {
      setError(ex.response.data.error.message);
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
        {error ? <div className="alert alert-danger mt-3">{ error}</div> : null }
        <LoadingButton log={ loading } > Zaloguj </LoadingButton>
      </form>
    </div>
  );
}
