import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Mobilize from "./components/Mobilize";


function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <RegisterForm />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/mobilize">
            <Mobilize />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
