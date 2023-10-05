import React from 'react'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1>Simple theatre</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Action</li>
                <li>Horror</li>
                <li>Sports</li>
                <li>Fantasy</li>
            </ul>
        </nav>
    );
}
