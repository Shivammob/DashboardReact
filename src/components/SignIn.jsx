import React, { useState } from "react";
import { useForm } from "react-hook-form";

import signin from "@/assets/images/signin/sign_in.png";
import hidePasswordImg from "@/assets/images/hide_password.svg";
import showPasswordImg from "@/assets/images/show_password.svg";
import { NavLink } from "react-router-dom";

function SignIn() {
  const [passIcon, setPassIcon] = useState({ pass1: false });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  const toggleIcon = (value) => {
    setPassIcon((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  return (
    <main className="ms-0 mt-0">
      <section>
        <div className="sign">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 mb-4">
                <div className="sign-left">
                  <img src={signin} alt="signin" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-5 px-md-3 px-lg-5 mb-4">
                <div className="sign-right">
                  <h1 className="font-30">Welcome 👋</h1>
                  <p className="font-14 mb-4">
                    Please login to continue to your account.
                  </p>
                  <form className="cst-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="d-flex align-items-center mb-1">
                        <input
                          type="email"
                          className="form-control py-3"
                          id="email"
                          placeholder="Enter Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="Password" className="form-label">
                        Password
                      </label>
                      <div className="d-flex align-items-center passwordInput mb-1">
                        <input
                          type={passIcon.pass1 ? "text" : "password"}
                          className="form-control py-3"
                          id="Password"
                          placeholder="Enter Password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                        />
                        {passIcon.pass1 ? (
                          <img
                            src={showPasswordImg}
                            alt="show password"
                            className="img-fluid cst-form-pass"
                            id="showPassword"
                            onClick={() => toggleIcon("pass1")}
                          />
                        ) : (
                          <img
                            src={hidePasswordImg}
                            alt="hide password"
                            className="img-fluid cst-form-pass"
                            id="hidePassword"
                            onClick={() => toggleIcon("pass1")}
                          />
                        )}
                      </div>
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <button type="sunmit" className="btn primarybtn w-100">
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
