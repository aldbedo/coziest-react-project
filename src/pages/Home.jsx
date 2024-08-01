import React from 'react'
import CarouselApp from '../components/CarouselApp'
import '../styles/home.css'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

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
                <h>PRODUCTS</h>
                <h2 className="product-section-title">1ST COLLECTION</h2>
            </div>
            <div className="product-section">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        src={product.src} 
                        title={product.title}/>
                ))}
            </div> 
        </div>
    )
}

export default Home