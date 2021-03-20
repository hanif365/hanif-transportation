import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';

// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';

// firebase.initializeApp(firebaseConfig);

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service/:rideType">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
