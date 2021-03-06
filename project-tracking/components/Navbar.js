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
        <nav className="absolute top-0 w-screen z-10">
            <div className="py-9 md:flex md:justify-between md:align-middle max-w-screen-xl mx-auto px-9 text-2xl">
                <div className="flex justify-between align-middle">
                    <a href="#">
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                    <button onClick={toggle} className="md:hidden">
                        {navIcon}
                    </button>
                </div>
                <ul className={`${navOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row border md:border-none  shadow-xl md:shadow-none rounded-md font-bold text-2xl  text-neutral-400 uppercase px-8 md:px-0 mt-10 md:mt-0 bg-white md:bg-transparent`} >
                    <li><a href="#" className="py-5 md:py-0 md:mr-7 text-center block md:inline">Product</a></li>
                    <li><a href="#" className="pb-5 md:py-0 md:mr-7 text-center block md:inline">Features</a></li>
                    <li><a href="#" className="pb-5 md:py-0 md:mr-7 text-center block md:inline">Pricing</a></li>
                    <li><div className="hidden w-2 h-2 bg-neutral-200 rounded-full  md:mr-7 md:mt-3 md:block"></div></li>
                    <li><a href="#" className="py-5 md:py-0  text-center border-t-2 border-neutral-100 md:border-none text-neutral-200 block">Login</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;