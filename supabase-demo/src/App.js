import "./index.css";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://bspiizmczisjkgtgcqik.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcGlpem1jemlzamtndGdjcWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MTU3MTIsImV4cCI6MjA0OTk5MTcxMn0.Pef7hj6Fy0aJHC3Y8DGswosxJvMfsJxDy6V3lwBDfqU"
);

export default function App() {
  async function signup() {
    const data = await supabase.auth.signUp({
      email: "vatelip509@evusd.com",
      password: "123456",
    });
    console.log(data);
    return data;
  }

  async function login() {
    const data = await supabase.auth.signInWithPassword({
      email: "vatelip509@evusd.com",
      password: "123456",
    });
    console.log(data);
    return data;
  }

  async function logout() {
    const data = await supabase.auth.signOut();
    console.log(data);
    return data;
  }

  async function displayData() {
    const { data, error } = await supabase.from("countries").select("*");
    console.log(data);
  }

  return (
    <>
      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={displayData}>Display Data</button>
    </>
  );
}
