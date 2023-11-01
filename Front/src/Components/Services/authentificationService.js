import { save } from './../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const URL = "http://localhost:3001/api/v1/"

export default function authentificationService () {

  const dispatch = useDispatch();

  async function login(email, password) {
    const data = { email: email, password: password };
    const response = await fetch(URL+'user/login', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    });
    const {status, body} = await response.json();
    if(status === 200) {
      localStorage.setItem('token', body.token)
      return {error:false};
    }else{
      return {error:true};
    }
    
  }

  async function getUser() {

    const token = localStorage.getItem('token');

    const response = await fetch(URL+'user/profile', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Bearer" + token
        },
    });
    const {body} = await response.json();
      return body;
    
  }

  async function updateUser(firstName, lastName) {

    const token = localStorage.getItem('token');

    const response = await fetch(URL+'user/profile', {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Bearer" + token
        },
        body: JSON.stringify({firstName: firstName, lastName: lastName})
    });
    const {body} = await response.json();
      return body;
  }

  function logOut() {
    localStorage.setItem('token', "")
    return "token is set"
    const user = {}
    dispatch(save(user));
    
  }

  return {login, logOut, getUser, updateUser}
}
