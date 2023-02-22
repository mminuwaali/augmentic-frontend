import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// configurations
import { logo, navLinks } from '../config'

export default () => {
    // states
    const [navBtn, setNavBtn] = React.useState(false);

    return <header className="items-center justify-between">
        <img src={logo} alt="" className="h-12" />
        <nav className="grow flex items-center justify-start gap-4">
            {navLinks.map(link => <NavLink to={link.path}>
                {link.text}
            </NavLink>)}
        </nav>
        <div className="flex items-center gap-2 font-bold">
            <button className="text-blue-500 font-bold caitalize">login</button>
            <button className="bg-blue-500 rounded-full caitalize text-white py-2 px-8">sign up</button>
        </div>
    </header>
};
