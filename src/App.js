import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Schedule from './component/Schedule';
import About from './component/About';
import { ThemeContext } from './component/context';
import News from './component/News';
import Notfound from './component/Notfound';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsOfService from './component/TermsOfService';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    function toggleTheme(){
        setTheme((curr) =>  curr === 'dark' ? 'light' : 'dark')
    }

    const displayTheme = {
        background: theme === 'dark' ? 'linear-gradient(#000000, #000000, #994d00)' : 'linear-gradient(#EEEEEE, #EEEEEE, #EEEEEE)',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        transition: 'all 2s ease'
    }


    return (
        <Router>
                <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
                    <div className='App' style={displayTheme}>
                        <Routes>
                            <Route exact path='/' Component={Homepage} />
                            <Route exact path='/consultation' Component={Schedule} />
                            <Route exact path='/about' Component={About} />
                            <Route exact path='/about-us' Component={About} />
                            <Route exact path='/health-news' Component={News} />
                            <Route exact path='/privacy-policy' Component={PrivacyPolicy} />
                            <Route exact path='/terms-of-service' Component={TermsOfService} />
                            <Route path='*' Component={Notfound} />
                        </Routes>
                    </div>
                </ThemeContext.Provider>
        </Router>
    );
}

export default App;
