import React, { useState } from 'react'

import signin from "@/assets/images/signin/sign_in.png"
import hidePasswordImg from "@/assets/images/hide_password.svg"
import showPasswordImg from "@/assets/images/show_password.svg"
import { NavLink } from 'react-router-dom'

function SignIn() {
    const [passIcon, setPassIcon] = useState({pass1: false});


    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    });

    const handleInput = (input, value) => {
       setInputValue(prevState => ({
        ...prevState,
        [input]: value,
       }))
    }

    console.log(inputValue, "s")

    const toggleIcon = (value) => {
        setPassIcon(prevState => ({
            ...prevState,
            [value]: !prevState[value],
        }))
    }

    
  return (
    <main className="ms-0 mt-0">
        <section>
            <div className="sign">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-7 mb-4">
                            <div className="sign-left">
                                <img src={signin} alt="signin" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-5 px-md-3 px-lg-5 mb-4">
                            <div className="sign-right">
                                <h1 className="font-30">Welcome 👋</h1>
                                <p className="font-14 mb-4">Please login to continue to your account.</p>
                                <form className="cst-form">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="d-flex align-items-center">
                                            <input type="email" className="form-control py-3" id="email"
                                                placeholder="Enter Email" onChange={(event) => handleInput("email", event.target.value)} value={inputValue.email}/>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Password" className="form-label">Password</label>
                                        <div className="d-flex align-items-center passwordInput">
                                            <input type={passIcon.pass1 ? "text" : "password"} className="form-control py-3" id="Password"
                                                placeholder="Enter Password" onChange={(event) => handleInput("password", event.target.value)} value={inputValue.password}/>
                                            {passIcon.pass1 ? <img src={showPasswordImg} alt="show password"
                                                className="img-fluid cst-form-pass" id="showPassword"
                                                onClick={() => toggleIcon("pass1")}/> : <img src={hidePasswordImg} alt="hide password"
                                                className="img-fluid cst-form-pass" id="hidePassword" onClick={() => toggleIcon("pass1")}/>}
                                        </div>
                                    </div>
                                    <NavLink to="/" className="btn primarybtn w-100">Sign in</NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default SignIn