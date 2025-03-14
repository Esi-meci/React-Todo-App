import React from "react";
import './nav.css'
import Button from "../button/Button";

export default function Nav() {
    return (
        <>
            <nav className="w-screen bg-black min-h-16 text-white flex c_flex px-8 items-center" >
                <div className="flex gap-5">
                    <a href="#"><Button>Home</Button></a>
                    <a href="#"><Button>Services</Button></a>
                    <a href="#"><Button>About Us</Button></a>
                    <a href="#"><Button>Contact Us</Button></a>
                </div>
                <div className="flex gap-3">
                    <a href="#"><Button>Login</Button></a>
                    <a href="#"><Button>Register</Button></a>
                </div>
            </nav>
        </>
    )
}

// export default Nav