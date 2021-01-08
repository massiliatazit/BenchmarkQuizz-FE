import logo from './logo.svg';
import './App.css';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import StartPage from "./components/StartPage";
import Questions from "./components/Questions"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={StartPage} />
      <Route
            path="/Quizz"
            exact
            render={(props) => <Questions {...props} />}
          />
    </BrowserRouter>
  );
}

export default App;
