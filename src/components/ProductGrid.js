import ProductCard from './ProductCard';

function ProductGrid(props) {
    return (
        <section className="product-grid">
            {
                props.products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))
            }
        </section>
    );
}

export default ProductGrid;