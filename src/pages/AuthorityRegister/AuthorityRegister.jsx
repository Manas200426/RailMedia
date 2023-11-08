import React, { useState } from 'react'
import "./AuthorityRegister.css"
import { doc, setDoc } from "firebase/firestore";
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import {  Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from "../../firebase"
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AuthorityRegister = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false);

    const handleAuthorityRegister = async (e) => {
        e.preventDefault();
        const authorityEmail = e.target[0].value;
        const authorityPassword = e.target[1].value;
        const station = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, authorityEmail, authorityPassword);

            await updateProfile(res.user, {
                displayName: authorityEmail, 
            });

            await setDoc(doc(db, "Authority", res.user.uid), {
                uid: res.user.uid,
                email: authorityEmail,
                station: station,
            });
            navigate("./AuthorityLogin"); 
        } catch (error) {
            setError(true);
        }
    };

  return (
    <div className='register'>
    <div className="registerWrapper">
        <div className="registerLeft">
            <h3 className="registerLogo">RailMedia</h3>
            <h3>(Authority Version)</h3>
            <span className="registerDesc">
                Solve Problems Together on ReailMedia!
            </span>
        </div>
        <div className="registerRight">
            <div className="registerBox">
                
                <div className="bottom">
                    <form className="bottomBox" onSubmit={handleAuthorityRegister} >
                    <input type="email"
                    placeholder='Authority Email'
                    className='registerInput'
                    required />

                <input type="password"
                    placeholder='Password'
                    className='registerInput'
                    required />

                <input type="text"
                    placeholder='Station'
                    className='registerInput'
                    required />
                        <button type="submit" className="registerButton">Sign Up</button>
                        <Link to="/AuthorityLogin">
                        <button className="loginRegisterButton">
                            Log into Account
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

export default AuthorityRegister