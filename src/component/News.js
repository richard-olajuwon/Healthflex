import React, { useEffect, useState } from "react";
import './news.css'
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default function News(){

    const [newsInfo, setNewsInfo] = useState([]);
    const [newsLimitReached, setNewsLimitReached] = useState('');


    async function fetchNews(){
        // Get today's date
        let today = new Date();

        // Subtract one day
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        let yesterdayToString = yesterday.toISOString().split('T')[0]

        const newsApiUrl = `https://newsapi.org/v2/everything?q=health&searchIn=title&language=en&pageSize=20&sortBy=relevancy&from=${yesterdayToString}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`

        await fetch(newsApiUrl,
        {})
        .then(response => response.json())
        .then(data => {
            const news = data.articles.map((item, index) => {
                return(
                    <div className="health-news-inner" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <label>Source: <span id="news-link">{item.source.name}</span></label>
                        <br/>
                        <div className="read-more-tag-container">
                            <a className="read-more-tag" href={item.url}>Read more &gt;&gt;</a>
                        </div>
                    </div>
                )
            });
            setNewsInfo(news)
        })
        .catch(err => {
            setNewsLimitReached(<div className="health-news-inner">No news at the moment, check back tomorrow.</div>);
        })
    }

    useEffect(() => {document.title = 'Health News'; fetchNews()}, [])


    return(
        <div className="news" style={{height: newsInfo.length > 0 ? 'auto' : '100vh'}}>
            <Header/>

            <ScrollToTop/>
            <section className="news-section"> <h1>News</h1> </section>

            <section className="news-writeup">
                <div className="news-writeup-inner">
                    <h2>Get news headline from Nigeria and all around the Globe all in one place</h2>
                </div>
            </section>

            <section className="health-news">
                {newsInfo}
                {newsLimitReached}
            </section>

        </div>
    )
}