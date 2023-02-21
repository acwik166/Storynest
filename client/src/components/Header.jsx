import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="main__heading">
                <div className="logo">
                    <h1><Link to="/">Storynest</Link></h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/">Articles</Link></li>
                        <li><Link to="/write">Write</Link></li>
                        <li><Link to="/">Topic ideas</Link></li>
                    </ul>
                    <div className="auth">
                        <button className='login'>Login</button>
                        <button className='signup'>Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
