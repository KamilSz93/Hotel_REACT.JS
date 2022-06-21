import { useRef, useState } from "react";

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const submit = (e) => {
    e.preventDefault();
    
    setTimeout(()=> {
      //logowanie
    }, 500)

  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            className="form-control" />
        </div>
        <div className="form-group">
          <label>Hasło</label>
          <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            className="form-control" />
        </div>
        <button className="btn btn-primary mt-2">Zapisz</button>
      </form>
    </div>
  );
}
