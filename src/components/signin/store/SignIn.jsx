import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import signin from "@/assets/images/signin/sign_in.png";
import hidePasswordImg from "@/assets/images/hide_password.svg";
import showPasswordImg from "@/assets/images/show_password.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useToast } from "../../context/ToastContext";

function SignIn() {
  const navigate = useNavigate();
  const [passIcon, setPassIcon] = useState({ pass1: false });
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    try {
      const response = await fetch("http://localhost:5000/sign_in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const result = await response.json();
     
      if (result.success) {
        const user = result.user;
        localStorage.setItem("emailId", user.email_id);
        localStorage.setItem("name", user.name);
        localStorage.setItem("id", user.id);
        localStorage.setItem("createdAt", user.created_at);
        localStorage.setItem("status", user.status);
        localStorage.setItem("type", user.type);
        toast.success(result.message || "Sucessfully Logged In");
        setTimeout(() => {
          navigate("/");
        }, 2000)
      } else {
        toast.error(result.error || "Error while logging in");
      }
    } catch (error) {
      // toast("Error sending data to server:", error, {
      //   progressStyle: { position: "top-right", backgroundColor: "red" },
      // });
      toast.error("Error sending data to server");
    }
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
                    Please login to or <NavLink to="/sign-up">Sign up</NavLink>{" "}
                    continue to your account.
                  </p>
                  <Form className="cst-form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-4" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <InputGroup className="mb-1">
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          isInvalid={!!errors.email}
                          className="py-3"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                      </InputGroup>
                      {errors.email && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Password">
                      <Form.Label>Password</Form.Label>
                      <InputGroup className="mb-1">
                        <Form.Control
                          type={passIcon.pass1 ? "text" : "password"}
                          placeholder="Enter Password"
                          isInvalid={!!errors.password}
                          className="py-3"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                        />
                        <InputGroup.Text
                          onClick={() => toggleIcon("pass1")}
                          style={{ cursor: "pointer" }}
                          className="p-1"
                        >
                          <img
                            src={
                              passIcon.pass1 ? showPasswordImg : hidePasswordImg
                            }
                            alt={
                              passIcon.pass1 ? "Show Password" : "Hide Password"
                            }
                            className="img-fluid"
                          />
                        </InputGroup.Text>
                      </InputGroup>
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </Form.Group>
                    <button type="submit" className="btn primarybtn w-100">
                      Sign in
                    </button>
                  </Form>
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
