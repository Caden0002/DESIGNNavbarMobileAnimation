import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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

function NavbarMobileAnimation(props) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween', // Set transition type to 'tween'
                duration: 0.3, // Specify duration
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" // Add ease-out easing function

            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut" // Add ease-out easing function
            }
        },
    };


    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };


    return (
        <nav className="h-screen bg-gray-800 py-4 px-4">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-white font-bold text-xl">Logo</div>
                <ul className="flex text-white gap-6 items-center cursor-pointer">
                    {iconList.map((item, index) => (
                        <div key={index} onClick={index === iconList.length - 1 ? toggleModal : null}>{item.icon}</div>
                    ))}
                </ul>
            </div>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center bg-gray-900"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <FaTimes
                            className="absolute top-6 right-4 text-white cursor-pointer"
                            onClick={toggleModal}
                            style={{ fontSize: '16px' }}
                        />
                        <motion.div
                            className="relative bg-gray-900 w-full"
                            variants={navLinksVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"

                        >
                            <div className="flex flex-col gap-8 items-center justify-center h-full ">
                                {navLinks.map((link, index) => (
                                    <motion.span key={index} className="text-white font-light text-2xl cursor-pointer" variants={linkItemVariants}>{link.title}</motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default NavbarMobileAnimation;
