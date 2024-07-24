import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { createContext, useContext } from "react";
import google from "../assets/google_logo.png";
import apple from "../assets/apple_logo.png";
import { Link } from "react-router-dom";

import { auth } from "@/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// type Props = {};

const Signup = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState<any>();
  const [error, setError] = useState<any>("");

  const handleCredentials = (e: any) => {
    setError("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error: any) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(error.message);
      });
  };

  return (
    <section className="w-screen h-screen ">
      <div className="w-[100%] flex justify-center items-center absolute">
        <div className="itemswrap w-[50%]  flex justify-center items-center flex-col gap-4 ">
          <div className="othersignup w-[90%] h-fit ">
            {/* GOOGLE AND APPLE SIGN UP */}
            <div className="flex justify-center items-center flex-col gap-6 p-10 pb-2">
              <h2>Sign up with:</h2>
              <div className=" flex gap-7 border-solid border-2 border-transparent border-b-gray-700 pb-10">
                <button className="bg-secondary-300 py-2 px-4 flex items-center gap-2 rounded">
                  {" "}
                  <span>
                    <img src={google} alt="google_logo" />
                  </span>
                  Google
                </button>
                <button className="bg-secondary-300 py-2 px-4 flex items-center gap-2 rounded">
                  {" "}
                  <span>
                    {" "}
                    <img src={apple} alt="apple_logo" />{" "}
                  </span>{" "}
                  apple
                </button>
              </div>
              <div className="h-10 w-10 rounded-full bg-white relative bottom-11 flex justify-center">
                or
              </div>
            </div>
          </div>

          {/* SIGN UP FORM */}
          <form>
            <div className="signupform w-[90%] relative">
              <div className="flex justify-center items-center flex-col gap-6 ">
                {/* <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                /> */}
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                  onChange={(e) => {
                    // setEmail(e.target.value);
                    handleCredentials(e);
                  }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                  onChange={(e) => {
                    // setPassword(e.target.value);
                    handleCredentials(e);
                  }}
                />
                {/* <input
                  type="password"
                  name="text"
                  placeholder="Retype Password"
                  className="w-[100%] border-2 border-secondary-300 px-2 py-3 rounded-lg"
                /> */}

                <p className="text-xs text-gray-500">
                  6 or more characters, one number, one uppercase & one lower
                  case.
                </p>

                <button
                  className="w-[100%] bg-secondary-300 py-3 px-5 flex justify-center gap-2 rounded-full text-center text-primary-100 "
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign up with Email
                </button>
              </div>

              {error && (
                <div className="block text-center text-red-600 text-xs">
                  {error}
                </div>
              )}
            </div>
          </form>
          {/* OTHER STUFF */}
          <div className="flex items-center flex-col gap-6 w-[70%]">
            <h4>
              Already have an Account?{" "}
              <Link to="/login" className="text-secondary-300">
                Log In
              </Link>
            </h4>

            <div className="flex items-center flex-col text-gray-500">
              <p className="text-xs">By signing up, you agree to </p>
              <p>
                Scissor's{" "}
                <span className="text-primary-text">
                  Terms of Service, Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-primary-text">
                  Acceptable Use Policy.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
