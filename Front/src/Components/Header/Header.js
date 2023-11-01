import './../../Assets/css/main.css';
import Logo from './../../Assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import authentificationService from '../Services/authentificationService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { save } from './../../features/userSlice';

function Header() {

  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  let logged = false





  function logOut (e) {
    e.preventDefault();
    const logOut = authentificationService();
    logOut.logOut()
    let userEmpty = {}
    dispatch(save(userEmpty));
    logged = false;
    navigate('/')
  } 

  if(user.firstName){
    logged = true;
  }


  return (
    <nav className="main-nav">
      <Link to={'/'} className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
      
      <div>
        <Link className="main-nav-item" to={'/sign-in/'}>
          <i className="fa fa-user-circle"> </i>
          &nbsp; {logged ? user.firstName : 'Sign In'}
        </Link>
        {logged ? (
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
