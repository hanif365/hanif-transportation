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

// firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
