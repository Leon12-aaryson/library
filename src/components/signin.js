import React, { useState } from "react";

export default function SignIn() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    data.checkboxValue = isChecked;

    console.log('Form Data:', data);
  }

  return (
    <>
      <section className="loginpage h-screen flex items-center justify-center">
        <div className="bg-white w-3/5 md:w-4/5 p-4 rounded bg-opacity-90">
          <h3 className="ml-4 font-bold text-2xl text-custom-blue">Library Locale</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4">
              <h4 className="font-bold text-4xl">Welcome back</h4>
              <form onSubmit={handleSubmit}>

                <div className="mb-6 mt-4">
                  <label htmlFor="email" className="block mb-2 text-m font-medium text-gray-900">Your email</label>
                  <input type="email" id="email" name="email" className="bg-gray-50 border focus:border focus:border-gray-200 text-gray-900 text-m rounded-l block w-full p-2.5" placeholder="Your Email" />
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-m font-medium text-gray-900">Password</label>
                  <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-l block w-full p-2.5" placeholder="Enter your password" />
                </div>

                <div className="flex items-start mb-6 place-content-between">
                  <div className="flex items-center h-5">
                    <input id="remember" checked={isChecked} onChange={handleChange} type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-blue-300" />
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember Me</label>
                  </div>
                  <label htmlFor="forgot-password" className="ms-2 text-sm font-medium text-custom-blue underline">Forot password</label>
                </div>

                <button type="submit" className="bg-custom-blue text-white focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded text-m w-full mt-4 mb-4 px-5 py-2.5 text-center ">Login</button>
              </form>
              {/* <h4 className="text-center mt-4 mb-4 font-bold">OR</h4>
              <div className="flex justify-center">
                <button type="submit" className="bg-custom-google-light rounded w- md:w-2/4 mb-4">
                  <div className="flex px-2 py-2 justify-center items-center">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd" />
                    </svg>
                    <h4 className="ml-3">sign in with google</h4>
                  </div>
                </button>
              </div> */}
              <h6 className="mt-4">Don't have an account yet? <span className="underline text-custom-blue">SignUp</span></h6>
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
