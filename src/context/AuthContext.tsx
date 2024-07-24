import { createContext, useState, useEffect } from "react";
import {
  auth,
  //  analytics
} from "@/firebase.config";
import {
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // AuthErrorCodes,
  onAuthStateChanged,
} from "firebase/auth";
import { user } from "../shared/types";
// import { setDoc, doc } from "firebase/firestore";
// import { Context } from "@/shared/types";

// type value = {
//   signUp: () => void;
//   error: () => void;
// };
// type UserProviderProps = {
//   value: string;
//   // children: ReactNode
// };

export interface Context {
  // signUp: (email: string, password: string, username: string) => void;
  // logIn: (email: string, password: string, username: string) => void;
  // error: string | boolean;
  currentUser: user | null;
}

export const AuthContext = createContext<Context>({ currentUser: null });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  // const [error, setError] = useState<boolean | string>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);

  //COME BACK LATER AND MAKE THE SIGNUP AND LOGIN FUNCTIONS WORK FROM THE AUTHCONTEXT FILE
  //INSTEAD OF THE INDIVIDUAL LOGIN OR LOGOUT COMPONENTS
  // const signUp = async (email: string, password: string, username?: string) => {
  //   setError(true);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(async (result) => {
  //       console.log(result);
  //       try {
  //         const ref = doc(db, "userinfo", result.user.uid);
  //         const docRef = await setDoc(ref, { username });
  //         alert("Wellcome new User create successfully");
  //         console.log("Document written with ID: ", docRef);
  //       } catch (e) {
  //         console.error("Error adding document: ", e);
  //       }
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       if (errorCode === "auth/email-already-in-use") {
  //         setInterval(() => {
  //           setError("");
  //         }, 5000);
  //         setError("email already in use try another email");
  //       } else if (errorCode === AuthErrorCodes.WEAK_PASSWORD) {
  //         setInterval(() => {
  //           setError("");
  //         }, 5000);
  //         setError("Password Must be 6 charecter");
  //       } else {
  //         setError(errorMessage);
  //       }
  //     });
  // };

  // const logIn = async () => {};

  // const value = {
  //   signUp,
  //   error,
  //   logIn,
  // };

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
