import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { Netflix_logo, user_Avatar } from "../Utils/constants";
const Header = () => {
  
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe when component unmount
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className=" flex justify-between absolute w-screen px-8 py-4 bg-gradient-to-r from-black  z-10 opacity-75">
      <img
        className=" w-44  "
        src={Netflix_logo}
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-3 m-2 ">
          <img
            className=" w-12 h-12 "
            alt="usericon"
            src={ user_Avatar}
          ></img>
          <button
            className=" mx-3 font-bold text-1xl text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
