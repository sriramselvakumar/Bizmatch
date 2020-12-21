import './App.css';
import HomePage from './Pages/Home'
import RegisterPage from './Pages/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </Router>
  );
}

export default App;
