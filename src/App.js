import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin"
import HomePage from "./components/home"
import Books from "./components/books"

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
