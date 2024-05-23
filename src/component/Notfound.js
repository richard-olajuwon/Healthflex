import React, { useEffect } from "react";
import './notfound.css'
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Notfound(){

    useEffect(() => {document.title = 'Page not found'});

    return(
        <div className="notfound">
            <Header/>

            <section className="notfound-writeup">
                <div className="notfound-writeup-inner">
                    <img src="https://healthflex-files.s3.eu-north-1.amazonaws.com/404.jpg" alt="notfound" />
                    <h3>
                        The page you're looking for doesn't exist or you typed in a 
                        wrong URL, Try searching for it on our homepage. Go back <Link className="notfound-link" to={'/'}>Home</Link>
                    </h3>
                </div>
            </section>
        </div>
    )
}