function SortSection(props) {
    return (
        <section className="sort-section">
            <select onChange={(e) => props.setSort(e.target.value)}>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="low-high">Price Low to High</option>
                <option value="high-low">Price High to Low</option>
            </select>
        </section>
    );
}

export default SortSection;