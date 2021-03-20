import React, { useContext, useState } from 'react';
import './Login.css'

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Navbar/Navbar';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


// Sign in using email and password 
const Login = () => {
    // For Google start
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    // end google
    const [newUser, SetNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);

        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (isFieldValid === false) {
                console.log('False email given');
            }
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            if (isFieldValid === false) {
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

                    updateUserName(user.name);
                    console.log(user.name);
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
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);

                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('Sign in user info', res.user);
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

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            console.log('Username updated Successfully!');
        }).catch(function (error) {
            console.log(error);
        });
    }

    // Sign in using google

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const {displayName, email, photoURL} = res.user;
                const signedInUser = {
                    isSignedIn:true,
                    name: displayName,
                    email : email,
                    photo: photoURL
                }
                // setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                // var user = res.user;
                console.log(res);
                console.log(displayName, email, photoURL);
            }).catch(err => {
                // Handle Errors here.
                var errorCode = err.code;
                var errorMessage = err.message;
                // The email of the user's account used.
                var email = err.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = err.credential;
                console.log(errorMessage)
            });

    }

    return (
        <div className="main-container">
            <Navbar></Navbar>
            <div className="row">
                <div className="col">
                    <div className="form-container">
                        {/* <h1>This is Login Page</h1>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <p>Password : {user.password}</p> */}
                        <div className="form-content mt-5">
                            <form onSubmit={handleSubmit} className="">
                                <div >
                                    <h5 className="text-danger">{user.error}</h5>
                                    <h3>Welcome to {user.name}</h3>
                                    {
                                        user.success && <h4 className="text-success">User {newUser ? 'Created' : 'Logged in'} Successfully</h4>

                                    }
                                </div>
                                <h2>{newUser ? 'Create an Account' : 'Login'}</h2>
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
                                <input type="submit" class="btn btn-primary w-100" value={newUser ? "Create an account" : "Login"} />
                                <p>{newUser ? "Already have an account?" : "Don't have an account?"}<span>{newUser ? <span className="login-btn" onClick={() => SetNewUser(!newUser)}> Login now</span> : <span className="create-btn" onClick={() => SetNewUser(!newUser)}> Create an account</span>}</span></p>
                                {/* <input type="checkbox" onChange={() => SetNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">New User Sign up</label> */}
                            </form>
                        </div>
                    </div>
                    <div className="google-container text-center py-5">
                        <button onClick={handleGoogleSignIn}>Continue With Google</button>
                        {
                            user.isSignedIn && <p>Welcome, {user.name}</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;