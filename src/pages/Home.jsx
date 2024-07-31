import React from 'react'
import CarouselApp from '../components/CarouselApp'
import '../styles/home.css'

function Home() {
    
    return (
        <div className="home">
            <CarouselApp />
            <div className="about-section">
                <div className="container">
                    <h2>We Provide the Best Quality Services Ever</h2>
                    <p>With remarkable messages and unique artistry in each piece they produce, we are able to reach<br/> 
                        out and highlight the youth in every person we came across and positively influence those who <br/>
                        believe in what they do.</p>
                </div>
            </div>
        </div>
    )
}

export default Home