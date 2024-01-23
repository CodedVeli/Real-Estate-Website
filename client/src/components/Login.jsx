import React, {useState} from "react";
import "./App.css"

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = () =>{
        e.preventDefault();
        console.log(email);

    }


    return (
        <div className="auth-form-container">
            <form className="login-form"onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password"/>
                <button>Log In</button>
            </form>
            <button className="link-btn" onClick={ ()=> props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
)
}