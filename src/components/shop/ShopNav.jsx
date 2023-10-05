import React from 'react'
import { Link } from 'react-router-dom';

export default function ShopNav(props) {

    return (
        <nav className='shop'>
            <div className='logo1'>
                <p>Shop</p>
                <div className="icon">
                <i className="fa-solid fa-shop"></i>
                </div>
                <input type="text" onChange={(e) => props.setSearchData(e.target.value)} placeholder='Search...' ></input><i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <ul className='navb'>
                <Link to="/"><li>Home</li></Link>
                <Link to="smartphones"><li>Smartphones</li></Link>
                <Link to="laptops"><li>Laptops</li></Link>
                <li>Other</li>
                <Link to="/korzinka"><i className="fa-brands fa-shopify"> <p>{props.quti}</p></i></Link>
            </ul>
        </nav>
    );
}



