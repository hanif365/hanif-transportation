import React, { useState } from 'react';
import './Login.css'

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [newUser, SetNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);

        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if(isFieldValid === false){
                console.log('False email given');
            }
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            if(isFieldValid === false){
                console.log('False password given');
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }

    const handleSubmit = (e) => {
        // console.log(user.email, user.password)
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // Signed in 
                    // const user = res.user;
                })
                .catch((err) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // console.log(errorCode, errorMessage);

                    const newUserInfo = { ...user };
                    newUserInfo.error = err.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((err) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = err.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();

    }
    return (
        <div className="form-container">
            <div className="row">
                <div className="col">
                    <div className="">
                        {/* <h1>This is Login Page</h1>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <p>Password : {user.password}</p> */}
                        <div className="form-content my-5">
                            <form onSubmit={handleSubmit} className="">
                                <div >
                                    <h5 className="text-danger">{user.error}</h5>
                                    {
                                        user.success && <h2 className="text-success">User {newUser ? 'Created' : 'Logged in'} Successfully</h2>
                                        
                                    }
                                </div>
                                <h1>{newUser ? 'Create an Account' : 'Login'}</h1>
                                <div class="mb-3">
                                    {/* <label for="exampleInputEmail1" class="form-label">Name</label> */}
                                    {newUser && <input onBlur={handleBlur} type="text" class="form-control form-control-lg" id="exampleInputEmail1" name="name" placeholder="Name" required />}
                                </div>
                                <div class="mb-3">
                                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                                    <input onBlur={handleBlur} type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Email" required />
                                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                </div>
                                <div class="mb-3">
                                    {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                                    <input onBlur={handleBlur} type="password" class="form-control form-control-lg" id="exampleInputPassword1" name="password" placeholder="Password" required />
                                    <p>Please give at list 7 digit including a number</p>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remainder me</label>
                                </div>
                                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                                <input type="submit" class="btn btn-primary" value={newUser ? "Create an account" : "Login"} />
                                <p>{newUser ? "Already have an account?" : "Don't have an account?"}<span>{newUser ? <span className="login-btn" onClick={() => SetNewUser(!newUser)}> Login now</span> : <span className="create-btn" onClick={() => SetNewUser(!newUser)}> Create an account</span>}</span></p>
                                {/* <input type="checkbox" onChange={() => SetNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">New User Sign up</label> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;