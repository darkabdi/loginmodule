import React from 'react'
import useState from 'react'
import "../styles.css"

function register() {


    return (
        <form className="registerform">
            <input placeholder="Username" ></input>
            <input placeholder="password" ></input>
            <input placeholder="confirm password" ></input>
            <button>Sign up</button>
        </form>
    )
}

export default register
