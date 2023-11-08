import React, { useState } from 'react';
import "./AuthorityLogin.css";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function AuthorityLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const AuthorityLogin = async (e) => {
        e.preventDefault();

        const authorityEmail = e.target[0].value;
        const authorityPassword = e.target[1].value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, authorityEmail, authorityPassword);
            // On successful login, you can access userCredential.user for user details
            // For example, if you want to access the user's UID: userCredential.user.uid

            navigate("/authorityHome"); // Redirect to Authority Dashboard upon successful login
        } catch (error) {
            setError(true);
        }
    };
  return (
    <div className='login'>
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">RailMedia</h3>
            <h1> (Authority Version)</h1>
            <span className="registerDesc">
                Solve Problems Together on ReailMedia!
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
               
                <div className="bottom">
                    <form className="bottomBox" onSubmit={AuthorityLogin}>
                        
                          <input type="email" 
                        placeholder='AuthorityID' 
                        id='email' 
                        className='loginInput' 
                        required/>

                          <input type="password" 
                        placeholder='UniqueCode' 
                        id='password' 
                        className='loginInput' 
                        minLength={6}
                        required/>

                        <button type="submit" className="loginButton">Authority Log In</button>

                        <Link to="/AuthorityRegister">
                            <button className="loginRegisterButton">
                                Create a New Account
                            </button>
                            </Link>
                        
                    </form>                    
                </div>
            </div>                
        </div>                          
    </div>      
</div>
  

  )
}

export default AuthorityLogin