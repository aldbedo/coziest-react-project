import Footer from "./sections/Footer";
import Header from "./sections/Header";
import AppCarousel from "./sections/AppCarousel";

function Home() {
    
    return (
        <div className="wrapper">
            <header>
                <Header />
            </header>
            <section className="carousel">
                <AppCarousel />
            </section>
            <footer className="app-footer-container">
                <Footer />
            </footer>
        </div>
    );
}

export default Home