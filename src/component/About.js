import React, { useEffect } from "react";
import './about.css';
import Header from "./Header";
import { businessLogo, businessName, businessNameAllCaps, businessSlogan } from "./VitalInfo";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function About(){
    useEffect(() => {document.title= `About ${businessName}`;}, [])

    return(
        <div className="about">
            <Header/>

            <ScrollToTop/>
            <section className="about-us-section">
                <div className="about-us-section-inner">
                    About Us
                </div>
            </section>

            <section className="description-and-slogan">
                <div className="description-and-slogan-inner">
                    <h1>{businessNameAllCaps}</h1>
                    <h3>{businessSlogan}</h3>
                    <h2>A world class provider of healthcare products</h2>
                    <h3>Online Drug Store, Pharmacy, Prescription and Health Information.</h3>
                </div>
            </section>

            <section className="brief-intro">
                <div className="brief-intro-inner">
                    <h1>Brief Introduction</h1>
                    <span></span>
                    <p>
                        {businessName} is a leading health and wellness company based in Nigeria.
                        Since established, it has expand with a strong presence across the country.
                    </p>
                    <p>
                        As part of our overall strategy to build a formidable force in the field of life sciences, {businessName} has 
                        invested tremendously in research and development by partnering with Research and 
                        Development Institutes and Manufacturing Companies to continuously connote 
                        a culture that combines an endorsement of globally acceptable standards in healthcare industry 
                        practices with a genuine concern for the availability of potent but affordable medical products 
                        and equipment to meet the needs of our customers and form a powerful synergy based on a set of 
                        values in Africa and beyond. Our product lines have covered Herbal Medicine/TCM, Food Supplements, 
                        Personal Care and Medical Device.
                    </p>
                    <p>
                        Over the years, {businessName} has established a strong distribution network and prides ourself on a large network 
                        of distributors and customers across the country as a result of our wide range quality products, life-changing 
                        compensatory packages and optimum service delivery. We also have a highly-proactive after-sales and technical 
                        support capabilities. {businessName} delivers promises and even exceeds expectations always.
                    </p>
                </div>
            </section>

            <section className="our-vision">
                <div className="our-vision-inner">
                    <h1>Our Vision</h1>
                    <span></span>
                    <p>
                        Making people’s lives better by unleashing the power of healthcare, {businessName} aims 
                        to setup Traditional Medicine Pharmaceutical Factories, Traditional 
                        Medicine Hospitals and Herbal Medicine Research Institutes across the country.
                    </p>
                </div>
            </section>

            <section className="our-goal">
                <div className="our-goal-inner">
                    <h1>Our Goal</h1>
                    <span></span>
                    <p>
                        To provide our customers with healthcare solutions to suit their needs and to provide
                        this solutions at an affordabe price.
                    </p>
                </div>
            </section>

            <section className="our-values">
                <div className="our-values-inner">
                    <h1>Our Values</h1>
                    <span></span>
                    <p>
                        We believe strongly in the values of integrity, openness, continuous self-improvement, 
                        constructive criticism, global involvement, respect and diversity both as a Company and 
                        as individuals at all times.
                    </p>
                </div>
            </section>

            <section className="our-brand">
                <h1>Our Brand</h1>
                <span></span>
                <div className="our-brand-logo-container"> <img src={businessLogo} alt="Our Brand" /> </div>
            </section>

            <section className="contact-us">
                <div className="contact-us-inner">
                    <p>Questions or Concerns? Get in touch!</p>
                    <div>
                        <Link className="icon-container" to={'tel:08126059170'}><img src="https://healthflex-files.s3.eu-north-1.amazonaws.com/call-icon-black.png" alt="call icon" /></Link>
                        <Link className="icon-container" to={'mailto:healthflexpharmacy@gmail.com'}><img src="https://healthflex-files.s3.eu-north-1.amazonaws.com/email-icon-black.png" alt="email icon" /></Link>
                        <Link className="icon-container" to={'https://wa.me/2348126059170'}><img src="https://healthflex-files.s3.eu-north-1.amazonaws.com/whatsapp-icon-black.png" alt="whatsapp icon" /></Link>
                    </div>
                </div>
            </section>

            <section className="note">
                <div className="note-inner">
                    <h3>{businessNameAllCaps} PARTNERS WITH KEDI HEALTHCARE INDUSTRIES NIGERIA LIMITED AS AN AFFILIATE</h3>
                </div>
            </section>

            <Footer/>

        </div>
    )
}