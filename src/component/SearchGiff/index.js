const SearchGiff = ({query, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="query" value={query} onChange={onChange} />
            <button type="submit" value="search" >Add</button>
        </form>
    )
}

export default SearchGiff;