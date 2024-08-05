import React from 'react'
import CarouselApp from '../components/CarouselApp'
import '../styles/home.css'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'

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
            <div className="product-title">
                <h3>PRODUCTS</h3>
                <h2 className="product-section-title">1ST COLLECTION</h2>
            </div>
            <div className="product-section-container">
                <div className="product-section">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id}
                            src={product.src} 
                            title={product.title}/>
                    ))}
                </div>
            </div>
            <div className="gallery-section-container">
                <div className="gallery-row">
                    <div className="img-card">
                        <img src={image1} alt="image-1" className="gallery-image"></img>
                    </div>
                    <div className="description-container">
                        <h1>I have never seen elegance go out of style. Clothes make statement, costumes tell story.</h1>
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="description-container">
                        <h1>I have never seen elegance go out of style. Clothes make statement, costumes tell story.</h1>
                    </div>
                    <div className="img-card">
                        <img src={image2} alt="image-2" className="gallery-image"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home