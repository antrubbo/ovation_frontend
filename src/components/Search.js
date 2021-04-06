function Search ( {searched, setSearched }) {


    return (

    <div className="search">
        <input
        type="text"
        className = "searchTerm"
        placeholder="Search by artist name..."
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        /> 
        <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
        </button>
    </div>
        
    )

    }
    
    export default Search