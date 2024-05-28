import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {

  // form validation and submit to db
  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:8000/signin", {
        email, password
      })
        .then(res => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } })
          }
          else if (res.data === "notexist") {
            alert("User have not sign up")
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })
    }

    catch (e) {
      console.log(e);

    }

  }


  // page codebase
  return (
    <>
      <section className="loginpage h-screen flex items-center justify-center">
        <div className="bg-white w-3/5 md:w-4/5 p-4 rounded bg-opacity-90">
          <h3 className="ml-4 font-bold text-2xl text-custom-blue">Library Locale</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4">
              <h4 className="font-bold text-4xl">Welcome back</h4>


              <form method="POST">
                <div className="mb-6 mt-4">
                  <label htmlFor="email" className="block mb-2 text-m font-medium text-gray-900">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border focus:border focus:border-gray-200 text-gray-900 text-m rounded-l block w-full p-2.5"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-m font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-l block w-full p-2.5"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* <div className="flex items-start mb-6 place-content-between">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-blue-300" />
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember Me</label>
                  </div>
                  <label htmlFor="forgot-password" className="ms-2 text-sm font-medium text-custom-blue underline">Forot password</label>
                </div> */}

                <button onClick={submit} type="submit" className="bg-custom-blue text-white focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded text-m w-full mt-4 mb-4 px-5 py-2.5 text-center ">Login</button>
              </form>

              <h6 className="mt-4">Don't have an account yet? <Link to="/signup" className="underline text-custom-blue">SignUp</Link></h6>
            </div>
            <div className="p-4 flex content-center">
              <img alt="" className="h-auto" src="./welcome.png" width={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
