import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin"
import HomePage from "./components/home"

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
