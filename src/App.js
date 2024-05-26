import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifycode" element={<VerifyCode />} />
        </Routes>
      </div >
    </>
  );
}

export default App;
