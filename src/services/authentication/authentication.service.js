import { auth } from "../../../App";
// Optionally import the services that you want to use
import { signInWithEmailAndPassword } from "firebase/auth";
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
