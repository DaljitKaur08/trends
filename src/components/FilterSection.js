function FilterSection(props) {
    return (
        <section className="filter-section">
            <select onChange={(e) => props.setCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelry</option>
                <option value="electronics">Electronics</option>
            </select>
        </section>
    );
}

export default FilterSection;