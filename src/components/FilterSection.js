function FilterSection(props) {

    return (
        <section className="filter-section-buttons">

            <button
                onClick={() => props.setCategory("all")}
            >
                ALL
            </button>

            <button
                onClick={() => props.setCategory("men's clothing")}
            >
                MEN'S CLOTHING
            </button>

            <button
                onClick={() => props.setCategory("women's clothing")}
            >
                WOMEN'S CLOTHING
            </button>

            <button
                onClick={() => props.setCategory("jewelery")}
            >
                JEWELRY
            </button>

            <button
                onClick={() => props.setCategory("electronics")}
            >
                ELECTRONICS
            </button>

        </section>
    );
}

export default FilterSection;