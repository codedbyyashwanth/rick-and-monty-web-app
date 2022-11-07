import React from 'react'
import {BsGithub} from 'react-icons/bs'
import "../resources/styles/navbar.css"

const Navbar = () => {
        return (
                <nav>
                        <div className="logo">
                                <h1>R&M</h1>
                        </div>
                        <div className="github-link">
                                <a href="https://github.com/codedbyyashwanth/rick-and-monty-web-app"><BsGithub /></a>
                        </div>
                </nav>
        )
}

export default Navbar
