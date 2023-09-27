async function Services(email, password) {

  async function login (email, password) {
    const response = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const token = response.token;
    
    localStorage.setItem('token', token);
  }

  function getUser() {
    localStorage.getItem('token');
    return fetch();
  }

  function logOut() {
    localStorage.setItem('token', '');
  }

  const token = await login (email, password)
  console.log(token);
  //return token;

  //const user = await api.getUser();
}

export default Services;
