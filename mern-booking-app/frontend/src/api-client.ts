import { RegisterFormData } from "./pages/Register";
import SignIn, { SignInFormData } from "./pages/SignIn";

//import the VITE_API_BASE_URL from frontend .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//register interaction
export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include", //tell the browser send the cookie to server, then server will send it back to browser
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

//sign in interaction
export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

//validate token interaction
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include", //tell the browser send the cookie to server, then server will send it back to browser
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};
