function FilterSection({ setCategory }) {
    return (
        <section className="filter-section-buttons">
            <button onClick={() => setCategory("all")}>ALL</button>
            <button onClick={() => setCategory("men's clothing")}>MEN'S CLOTHING</button>
            <button onClick={() => setCategory("women's clothing")}>WOMEN'S CLOTHING</button>
            <button onClick={() => setCategory("jewelery")}>JEWELRY</button>
            <button onClick={() => setCategory("electronics")}>ELECTRONICS</button>
        </section>
    );
}

export default FilterSection;