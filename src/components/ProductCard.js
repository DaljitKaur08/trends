import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    const navigate = useNavigate();

    function goToProduct() {
        navigate(`/product/${props.id}`);
    }

    function addToCart() {
        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

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
            "cart",
            JSON.stringify(cart)
        );

        window.dispatchEvent(
            new Event("cartUpdated")
        );
    }

    return (
        <div className="product-card">
            <div
                onClick={goToProduct}
                style={{ cursor: "pointer" }}
            >
                <img
                    src={props.image}
                    alt={props.title}
                />
                <h3>{props.title}</h3>
            </div>

            <p>${props.price}</p>

            <button onClick={addToCart}>
                Add To Cart
            </button>
        </div>
    );
}

export default ProductCard;