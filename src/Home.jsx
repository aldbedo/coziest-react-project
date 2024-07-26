import Footer from "./sections/Footer";
import Header from "./sections/Header";
import AppCarousel from "./sections/AppCarousel";

function Home() {

    const images = [
        'src/assets/banner1.jpg',
        'src/assets/banner2.jpg',
        'src/assets/banner3.jpg',
    ];
    
    return (
        <div className="wrapper">
            <header>
                <Header />
            </header>
            <section>
                <AppCarousel images={images} />
            </section>
            <footer className="app-footer-container">
                <Footer />
            </footer>
        </div>
    );
}

export default Home