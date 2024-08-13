import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null); //gets the reference of the email
  const password = useRef(null);
  // const confirmPassword = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form Data

    if (email.current.value === null || password.current.value === null) {
      setErrorMessage("Please Enter a valid email or password");
    }
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //Sign in or Sign up here

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate("/browse");
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
           // We can add my user to Redux store and then we can user in our pages
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute  bg-black rounded-2xl w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className=" text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-4 my-4 rounded-md w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" p-4 my-4 rounded-md w-full bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 my-4 rounded-md w-full bg-gray-700 "
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className=" p-4 my-4 rounded-md w-full bg-gray-700 "
          />
        )}
        <p className=" text-red-500 font-semibold py-2 text-lg">
          {errorMessage}
        </p>
        <button
          type="submit"
          className="p-4 my-6 text-center bg-red-700 w-full rounded-lg text-xl"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 opacity-65 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
