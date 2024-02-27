import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import styles from './Navbar.module.css';
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useScrollPosition } from '../Hooks/scrollPosition';

const Navbar = () => {
    const[navBarOpen, setNavBarOpen] = useState(false);
    const[windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        heigth: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            heigth: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return window.removeEventListener('resize', detectDimension)
    },[windowDimension])

    const links = [
    {
        id: 1,
        link: "Servicios",
    },
    {
        id: 2,
        link: "Usar React",
    },
    {
        id: 3,
        link: "Contacto",
    }
];

    const scrollPosition = useScrollPosition();
    return (
    <div className={
        navBarOpen
        ? styles.navOpen
        :scrollPosition > 0
        ? styles.navOnScroll
        : styles.navBar}>
    
    {!navBarOpen && <p className={styles.logo}>Proyecto REACT</p>}
    {!navBarOpen && windowDimension.width < 800 ? ( 
    <IoIosMenu color='#f1f1f1'
        onClick={() => setNavBarOpen(!navBarOpen)} 
        size={25} />
    ) : (  windowDimension.width < 800 && (
    <IoIosClose 
        onClick={() => setNavBarOpen(!navBarOpen)} 
        color = '#f1f1f1' 
        size={50}/>
    )
    )}
    {navBarOpen && (
    <ul className={styles.linkContainer}>  
        {links.map((x)=> (
            <div>
                <Link
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
                >
                    {x.link === "HowWeWork" ? "How we work" : x.link}
                </Link>
                <div className={styles.border}></div>
            </div>
        ))}
    </ul>
    )}
    {
        windowDimension.width > 800 && (
        <ul className={styles.linkContainer}>  
        {links.map((x)=> (
            <div>
                <Link
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
                >
                    {x.link === "HowWeWork" ? "How we work" : x.link}
                </Link>
                <div className={styles.border}></div>
            </div>
        ))}        
    </ul>
    )}
    </div>
    );
    };

export default Navbar
