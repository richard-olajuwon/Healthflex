import React, {useContext} from "react";
import './footer.css'
import { ThemeContext } from "./context";
import { businessNameAllCaps } from "./VitalInfo";
import { Link } from "react-router-dom";

export default function Footer(){

    const {theme} = useContext(ThemeContext)

    const anchorTag = {
        color: theme === 'dark' ? '#ffffff' : '#000000',
        textDecoration: 'none'
    }

    return(
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <Link style={anchorTag} to="/privacy-policy">Privacy policy</Link>
                    <Link style={anchorTag} to="/terms-of-service">Terms of Service</Link>
                    <Link style={anchorTag} to="/about">About</Link>
                </div>

                <div>&copy; 2024 {businessNameAllCaps}. All Rights Reserved.</div>
            </div>
        </div>
    )
}