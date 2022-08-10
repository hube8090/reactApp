import React from 'react';
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div>
                <li>
                    <NavLink to='/'>main</NavLink>
                </li>
                <li>
                    <NavLink to='/user'>user</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>aboutUs</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>posts</NavLink>
                </li>
        </div>
    );
}

export default Header;