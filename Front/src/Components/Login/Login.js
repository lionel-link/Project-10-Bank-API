import { useNavigate } from 'react-router-dom';
import authentificationService from '../Services/authentificationService';
import './../../Assets/css/main.css';
import './Login.css';
import { useEffect, useRef, useState } from 'react';
import { save } from './../../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const authentification = authentificationService();
  const navigate = useNavigate();
  const referror = useRef()
  const dispatch = useDispatch();
  const [logged, setLogged] = useState();

  useEffect(() => {
    if(logged === true){
      navigate('/profile');
    }
  },[logged, navigate])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.username.value;
    const password = event.target.password.value;
    const { error } = await authentification.login(email, password);
    if (error === false) {
      const user = await authentification.getUser()
       await dispatch(save(user))
      referror.current.style.display = 'none';
      setLogged(true);
    }else{
      referror.current.style.display = 'block';
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" id="password" />
          </div>
          <div ref={referror} className="error-form">Identifiant ou mot de passe incorrect</div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <a href="./user.html" className="sign-in-button">
            Sign In
          </a> */}
          <button className="sign-in-button" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
