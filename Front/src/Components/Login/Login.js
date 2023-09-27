import Services from '../Services/Service';
import './../../Assets/css/main.css';

function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
       const email = event.target.username.value
       const password = event.target.password.value
       console.log(email, password)
       console.log(Services(email, password))
    };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input name ="username" type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input name ="password" type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <a href="./user.html" className="sign-in-button">
            Sign In
          </a> */}
          <button className="sign-in-button" type='submit'>Sign in</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
