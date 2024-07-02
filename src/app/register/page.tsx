"use client";

import React, {useEffect, useState } from "react";
import styles from "../register/register.module.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords do not match !!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/create",
        { username, email, password, confirmpassword }
      );
      console.log(response);
      router.push("/main");

      if (!response) {
        setMessage("False");
      }
      setMessage("True");
      setMessage("Registration successful!");
    } catch (error: any) {
      console.log(error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
    
  };

  const { data: session } = useSession()
  const router = useRouter();
  
  useEffect(() => {
    if (session) {
      router.push("/main");
    }
  }, [session, router]);  

  return (
    <>
      <section className={styles.section_register}>
        <div className={styles.formContainer}>
          <h1>Register</h1>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username :</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Confirm Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className={styles.button}
              type="submit"
            >
              Register
            </button>
            <span> </span>
            <button
              className={styles.button1}
              onClick={() => {
                signIn('google');
              }}
            >
              <FcGoogle /> Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
