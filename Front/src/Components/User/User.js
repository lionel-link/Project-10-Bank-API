import './../../Assets/css/main.css';
import authentificationService from '../Services/authentificationService';
import React, { useState } from 'react';
import { save } from './../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function User({ type }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const authentification = authentificationService();
  let userDb;
  getUser();

  async function getUser() {
    const res = await authentification.getUser();
    userDb = res;
    //dispatch(save(userDb));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    const { error } = await authentification.updateUser(firstName, lastName);
  }

  if (type === 'read') {
    return renderer("");
  } else {
    return renderer('update');
  }

  function renderer(action) {
    console.log(action)
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName}
          </h1>
          {action === '' ? (
            <button className="edit-button">Edit Name</button>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" />
              </div>
              <button className="sign-in-button">Envoyer</button>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
}

export default User;
