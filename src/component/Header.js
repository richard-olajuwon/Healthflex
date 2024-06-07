import './header.css';
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {businessLogo} from './VitalInfo';
import { ThemeContext } from './context';

export default function Header(){
    const dropdown = 'https://healthflex-files.s3.eu-north-1.amazonaws.com/3+line+dropdown+gold.png'
    const closeDropdown = 'https://healthflex-files.s3.eu-north-1.amazonaws.com/dropdown+close+gold.png'
    const toggleLightMode = 'https://webst-images.s3.eu-north-1.amazonaws.com/icons8-light.gif'
    const toggleDarkMode = 'https://webst-images.s3.eu-north-1.amazonaws.com/icons8-dark-mode-30.png'

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {toggleTheme, theme} = useContext(ThemeContext);

    function toggleDropdown(){
        setDropdownOpen(!dropdownOpen)
    }

    const dropdownDisplay = {
        visibility: dropdownOpen === false ? 'collapse' : 'visible',
        transform: dropdownOpen === false ? 'translateY(-60vh)' : 'translateY(0)',
        transition: 'all 1s ease',
        background : theme === 'dark' ? '#000000' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        width: '100%',
        display: window.innerWidth < 930 ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const anchorTag = {
        color: theme === 'dark' ? '#ffffff' : '#000000',
        textDecoration: 'none'
    }

    const headerTheme = {
        background : theme === 'dark' ? '#000000' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        height: dropdownOpen === false ? '60px' : 'auto'
    }

    return(
        <div className="header" style={headerTheme}>
            <div className="mobile-header">
                <div className='logo-container'><img className='logo' src={businessLogo} alt='business logo'/></div>
                <button className='theme-toggler-container' onClick={() => {toggleTheme()}}><img className='theme-toggler' src={theme === 'dark' ? toggleLightMode : toggleDarkMode} alt=''/></button>
                <button className='toggler-container' onClick={() => {toggleDropdown()}}><img className='dropdown-toggler' src={dropdownOpen === false ? dropdown : closeDropdown} alt='dropdown' /></button>
            </div>

            <div className='dropdown-menu' style={dropdownDisplay}>
                <Link className='routes' to={'/'} style={anchorTag}>Home &rarr;</Link>
                <Link className='routes' to={'/consultation'} style={anchorTag}>Schedule a Consultation &rarr;</Link>
                <Link className='routes' to={'/products'} style={anchorTag}>Products &rarr;</Link>
                <Link className='routes' to={'/about'} style={anchorTag}>About &rarr;</Link>
            </div>

            <div className="window-header">
                <div className='logo-container'><img className='logo' src={businessLogo} alt='business logo'/></div>
                <div className='window-header-link'>
                    <Link className='routes' to={'/'} style={anchorTag}>Home</Link>
                    <Link className='routes' to={'/consultation'} style={anchorTag}>Schedule a Consultation</Link>
                    <Link className='routes' to={'/products'} style={anchorTag}>Products</Link>
                    <Link className='routes' to={'/about'} style={anchorTag}>About</Link>
                </div>
                <button className='theme-toggler-container' onClick={() => {toggleTheme()}}><img className='theme-toggler' src={theme === 'dark' ? toggleLightMode : toggleDarkMode} alt=''/></button>
            </div>
        </div>
    )
}