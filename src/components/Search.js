function Search ( {searched, setSearched }) {


    return (

    <div>
        <input
        type="text"
        placeholder="Search by artist name..."
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        /> 
    </div>
        
    )

    }
    
    export default Search