import './../../Assets/css/main.css';
import Logo from './../../Assets/img/argentBankLogo.png';
import { Link, useLocation } from 'react-router-dom';
import authentificationService from '../Services/authentificationService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  console.log(user);


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
        <Link className="main-nav-item" to={'/sign-in/'}>
          <i className="fa fa-user-circle"> </i>
          &nbsp; {user ? user.firstName : 'Sign In'}
        </Link>
        {user ? (
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
