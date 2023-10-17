import './../../Assets/css/main.css';
import Logo from './../../Assets/img/argentBankLogo.png';
import { useLocation } from 'react-router-dom';
import authentificationService from '../Services/authentificationService';
import { useNavigate } from 'react-router-dom';

function Header() {

  const location = useLocation();
  const navigate = useNavigate();


  function logOut (e) {
    e.preventDefault();
    const logOut = authentificationService();
    logOut.logOut()
    navigate('/')
  } 
  

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"> </i>
          &nbsp; {location.pathname === '/profile' ? 'Tony' : 'Sign In'}
        </a>
        {location.pathname === '/profile' ? (
          <a className="main-nav-item" href="/" onClick={logOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
}

export default Header;
