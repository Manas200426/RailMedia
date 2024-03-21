import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AuthorityRegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleAuthorityRegister = async (e) => {
    e.preventDefault();
    const authorityEmail = e.target.elements.email.value;
    const authorityPassword = e.target.elements.password.value;
    const station = e.target.elements.station.value;
  
    try {
      const res = await createUserWithEmailAndPassword(auth, authorityEmail, authorityPassword);
  
      await setDoc(doc(db, 'Authority', res.user.uid), {
        uid: res.user.uid,
        email: authorityEmail,
        
        station: station,
      });
  
      navigate('/AuthorityLogin');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please use a different email address.');
      } else {
        console.error('Error registering authority:', error);
        setError('An error occurred while registering. Please try again.');
      }
    }
  };
  
  return (
    <div className='register'>
      <h2>Authority Registration</h2>
      <form onSubmit={handleAuthorityRegister}>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Password' required />
        <input type='text' name='station' placeholder='Station' required />
        <button type='submit'>Register</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default AuthorityRegisterPage;
