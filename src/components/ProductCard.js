function ProductCard(props) {

    function addToCart() {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(
            item => item.id === props.id
        );

        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            cart.push({
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image,
                quantity: 1
            });

        }

        localStorage.setItem(
            'cart',
            JSON.stringify(cart)
        );

        alert('Added to Cart');
    }

    return (
        <div className="product-card">

            <img src={props.image} alt={props.title} />

            <h3>{props.title}</h3>

            <p>${props.price}</p>

            <button onClick={addToCart}>
                Add To Cart
            </button>

        </div>
    );
}

export default ProductCard;