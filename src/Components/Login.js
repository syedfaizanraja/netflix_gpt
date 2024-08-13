import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="Bg-Logo"
        ></img>
      </div>
      <form className=" absolute  bg-black rounded-2xl w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" text-3xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className=" p-4 my-4 rounded-md w-full bg-gray-700 "
        />
        }
        <input
          type="email"
          placeholder="Email Address"
          className=" p-4 my-4 rounded-md w-full bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-4 my-4 rounded-md w-full bg-gray-700 "
        />
        {!isSignInForm && <input
          type="password"
          placeholder="Confirm Password"
          className=" p-4 my-4 rounded-md w-full bg-gray-700 "
        />}
        <button
          type="submit"
          className="p-4 my-6 text-center bg-red-700 w-full rounded-lg text-xl"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 opacity-65 cursor-pointer"onClick={toggleSignInForm} >
            {isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
