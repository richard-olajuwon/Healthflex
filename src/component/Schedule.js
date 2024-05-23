import React, { useEffect, useContext } from "react";
import Header from './Header';
import './schedule.css'
import { ThemeContext } from "./context";
import { Link } from "react-router-dom";

export default function Schedule(){
    useEffect(() => {
        document.title = 'Schedule a Consultation'
    }, [])

    const {theme} = useContext(ThemeContext);

    const anchorTag = {
        color: theme === 'dark' ? '#ffffff' : '#000000',
        background: theme === 'dark' ? '#000000' : '#ffffff',
        padding: '10px',
        fontSize: '1.5rem',
        border: '1px solid black',
        borderRadius: '10px',
        textDecoration: 'none'
    }

    return(
        <div className="schedule">
            <Header/>

            <div className="schedule-content">
                <h2>Fast and Easy Telehealth Visits</h2>
                <h3>
                    Are you currently experiencing ANY health concerns or symptoms that you'd like to discuss.
                    Our team of healthcare professionals are here to support you every step of the way. Schedule 
                    a virtual consultation with us today to get the care and guidance you need.
                </h3>
                <h3>
                    Take charge of your health! Schedule a virtual consultation with a doctor today 
                    and prioritize your well-being from the comfort of your own home.
                </h3>
            </div>

            <div className="schedule-types">
                <div>
                    Schedule a Consultation by phone call by clicking on the phone number below 
                    <br/>
                    <Link to='tel:08126059170' style={anchorTag}>08126059170</Link>
                </div>

                <div>Schedule a Consultation by Whatsapp call by clicking on Whatsapp below
                    <br/>
                    <Link to="https://wa.me/2348126059170" style={anchorTag}>Whatsapp</Link>
                </div>

            </div>

        </div>
    )
}