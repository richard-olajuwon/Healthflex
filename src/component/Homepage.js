import React, {useState, useEffect, useContext} from 'react'
import './homepage.css'
import Header from './Header'
import Footer from './Footer'
import { businessName, businessNameAllCaps } from './VitalInfo'
import { ThemeContext } from './context';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

export default function Homepage(){
    const {theme} = useContext(ThemeContext)

    const [welcomeMessage, setWelcomeMessage] = useState('');
    
    const welcomeMessageContent = `WELCOME TO A HEALTHY LIFE WITH ${businessNameAllCaps}`;
    let appendedText = '';
    let charIndex = 0;

    const typeWelcomeMessage = () => {
        if(charIndex < welcomeMessageContent.length){
            setWelcomeMessage(appendedText += welcomeMessageContent[charIndex]);
            charIndex++;
            setTimeout(typeWelcomeMessage, 110)
        }
        return welcomeMessage;
    }

    useEffect(() => {document.title = `${businessName}`; typeWelcomeMessage()}, [])
    

    const anchorTag = {
        color: theme === 'dark' ? '#ffffff' : '#000000',
        textDecoration: 'none'
    }

    return(
        <div className='homepage'>
            <Header/>
            <ScrollToTop/>
            <section className='first-section'>
                <video className='first-section-video' loop autoPlay muted>
                    <source src='https://healthflex-files.s3.eu-north-1.amazonaws.com/Curing_Diabetes_with_Lettuce%5B1%5D.mp4' type='video/mp4'/>
                </video>
                <h1 className='first-section-content'>{welcomeMessage}</h1>
            </section>

            <section className='tips-section'>
                <div className='tips-section-inner'>
                    <div className='tips-section-content'>
                        <h2>{businessName} is a world class provider of natural healthcare products.</h2>
                        <p></p>
                        <h3>
                            At {businessName}, we pride ourselves on offering top-tier healthcare solutions derived 
                            from natural roots and herbs. Our products are expertly crafted to tackle a wide range 
                            of health issues effectively including chronic diseases. With a focus on quality and authenticity, we're dedicated 
                            to providing holistic wellness solutions that improve lives naturally.
                        </h3>
                    </div>
                </div>
            </section>

            <section className='tips-section'>
                <div className='tips-section-inner'>
                    <div className='tips-section-content'>
                        Remember to prioritize your health by staying active,
                        eating nutritious foods, getting enough sleep,
                        managing stress, and staying hydrated. Regular
                        check-ups, screenings, and vaccinations are essential
                        for maintaining your well-being. Listen to your body,
                        practice self-care, and seek medical attention when
                        needed. Your health is your most valuable asset, so
                        take care of it every day.
                        <div>{businessNameAllCaps} CARES</div>
                    </div>
                </div>
            </section>

            <section className='consultation-section'>
                <div className='consultation-section-inner'>

                    <div className='consultation-images'>
                        <img src='https://healthflex-files.s3.eu-north-1.amazonaws.com/consultation-img-1.jpg' alt='consultation'/>
                        <img src='https://healthflex-files.s3.eu-north-1.amazonaws.com/consultation-img-2.webp' alt='consultation'/>
                    </div>

                    <h1>Schedule A Virtual Consultation</h1>
                    <h2>Fast and Easy Telehealth Visits.</h2>
                    <h3>
                        Are you currently experiencing ANY health concerns or symptoms that you'd like to discuss.
                        Our team of healthcare professionals are here to support you every step of the way. Schedule 
                        a virtual consultation with us today to get the care and guidance you need.
                    </h3>

                    <h3>
                        Take charge of your health! Schedule a virtual consultation with a doctor today 
                        and prioritize your well-being from the comfort of your own home.
                    </h3>
                    <Link to='/consultation' style={anchorTag}>Schedule Consultation &gt;&gt;</Link>
                </div>
            </section>

            <section className='about-section'>
                <div className='about-section-inner'>
                    <img src='https://healthflex-files.s3.eu-north-1.amazonaws.com/about-us.png' alt='about'/>
                    <h1>Our Story</h1>
                    <h3>
                        Know more about who we are, what we represent, what we have achieved
                        and what you stand to gain by joining the big {businessNameAllCaps} family.
                        Discover the giant strides we took that cumulated into making us the 
                        reputable healthcare provider that we have become.
                    </h3>
                    <Link to='/about' style={anchorTag}>Discover more &gt;&gt;</Link>
                </div>
            </section>

            <section className='health-news-section'>
                <div className='health-news-section-inner'>
                    <img src='https://healthflex-files.s3.eu-north-1.amazonaws.com/health+news.jpg' alt='health news'/>
                    <h1>Health News</h1>
                    <h3>
                        As a reputable healthcare provider, we understand that health is the real wealth. 
                        So, to help you live a longer and healthier life, take advantage of our health tips. 
                        Also, all you need to know about maintaining a balanced and healthy lifestyle are available 
                        here at your fingertips!
                    </h3>
                    <Link to='/health-news' style={anchorTag}>Learn More &gt;&gt;</Link>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}