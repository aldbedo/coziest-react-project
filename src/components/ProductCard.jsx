import '../styles/productCard.css'

function ProductCard(props) {

    return (
        <div className="card">
            <div className="card-container">
                <div className="card-img-container">
                    <img src={props.src} className="card-img" />
                </div>
                <div className="text-container"></div>
                <h6>{props.title}</h6>
                <p>Price</p>
            </div>
        </div>
    )
}

export default ProductCard