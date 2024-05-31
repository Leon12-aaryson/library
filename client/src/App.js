import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin"
import HomePage from "./components/home"
import Articles from "./components/articles";
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
