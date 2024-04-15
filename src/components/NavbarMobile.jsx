import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Contact', url: '/contact' }
];

const iconList = [
    { icon: <FaUser /> },
    { icon: <FaHeart /> },
    { icon: <FaShoppingCart /> },
    { icon: <FaBars /> } // Added the FaBars icon for the menu
];

function NavbarMobile(props) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };

    return (
        <nav className="h-screen bg-gray-800 py-4 px-4">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-white font-bold text-xl">Logo</div>

                <ul className="flex text-white gap-6 items-center cursor-pointer">
                    {iconList.map((item, index) => (
                        <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : null}>{item.icon}</div>
                    ))}
                </ul>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900">
                    <FaTimes
                        className="absolute top-6 right-4 text-white cursor-pointer"
                        onClick={toggleModal}
                        style={{ fontSize: '16px' }}
                    />
                    <div className="relative bg-gray-900 w-full ">
                        <div className="flex flex-col gap-8 items-center justify-center h-full ">
                            {navLinks.map((link, index) => (
                                <span key={index} className="text-white font-light text-2xl cursor-pointer">{link.title}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavbarMobile;
