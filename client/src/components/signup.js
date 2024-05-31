import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function SignUp() {

  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/signup", {
      email, password, firstName, lastName, confirmPassword
    })
      .then(result => {
        console.log(result)
        history("/signin")
      }
      )
      .catch(err => console.log(err))

  }

  // codebase for the registration of users
  return (
    <>
      <section className="loginpage h-screen flex items-center justify-center">
        <div className="bg-white w-3/5 md:w-4/5 p-4 rounded bg-opacity-90">
          <h3 className="ml-4 font-bold text-2xl text-custom-blue">Library Locale</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 flex content-center">
              <div className="text-justify self-center">
                <h4 className="font-bold text-4xl text-custom-blue mb-5">Welcome to Library Locale</h4>

                <p className="mt-4">Get an exclusive experience with our
                  services by signing up and get access
                  to Library Locale providing you with the biggest communities that appreciate
                  literature, reading and Poetry</p>
                <h5 className="font-medium mt-4">By signing up you agree to our terms and
                  conditions</h5>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-4xl">Welcome back</h4>
              <form method='POST'>
                <div className="mb-6 mt-4">
                  <label htmlFor="first_name" className="block mb-2 text-m font-medium text-gray-900">First name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstName"
                    className="bg-gray-50 border focus:border focus:border-gray-200 text-gray-900 text-m rounded-l block w-full p-2.5"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="mb-6 mt-4">
                  <label htmlFor="last_name" className="block mb-2 text-m font-medium text-gray-900">Last name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="lastName"
                    className="bg-gray-50 border focus:border focus:border-gray-200 text-gray-900 text-m rounded-l block w-full p-2.5"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

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

                <div className="mb-6">
                  <label htmlFor="confirm_password" className="block mb-2 text-m font-medium text-gray-900">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-l block w-full p-2.5"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button onClick={submit} type="submit" className="bg-custom-blue text-white focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded text-m w-full mt-4 mb-4 px-5 py-2.5 text-center ">Register</button>
              </form>

              <h6 className="mt-4">Don't have an account yet? <a href="/signin" className="underline text-custom-blue">SignIn</a></h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
