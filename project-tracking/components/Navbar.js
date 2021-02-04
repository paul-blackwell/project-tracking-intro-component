import { useState } from 'react';

const Navbar = (props) => {

    const [navOpen, setNavOpen] = useState(false)
    const toggle = () => setNavOpen(!navOpen)


    // Update navIcon based on the state
    let navIcon;
    if (navOpen) {
        navIcon = <img className="w-auto h-5" src="/images/icon-close.svg" alt="close icon" />;
    } else {
        navIcon = <img className="w-auto h-5" src="/images/icon-hamburger.svg" alt="menu icon" />;
    }

    return (
        <nav className="py-9">
            <div className="flex justify-between align-middle">
                <a href="#">
                    <img src="/images/logo.svg" alt="logo" />
                </a>
                <button onClick={toggle}>
                    {navIcon}
                </button>
            </div>
            <ul className="flex flex-col mx-auto shadow-xl rounded-md font-bold text-2xl  text-neutral-400 uppercase" >
                <li><a href="#" className="pt-3 text-center">Product</a></li>
                <li><a href="#" className="pt-3 text-center">Features</a></li>
                <li><a href="#" className="pt-3 text-center">Pricing</a></li>
                <li><div></div></li>
                <li><a href="#" className="py-3 text-center border-t-2 border-neutral-100 text-neutral-200">Login</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;