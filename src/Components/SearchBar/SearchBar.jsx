import './SearchBar.css'


const SearchBar = (props) => {

    function test(songsArray, toFilter){
        let filteredResults = songsArray.filter(function(el){
            if (el.includes(toFilter)) {
                return true;
            } else {
                return false;
            }
        })
    }



    return ( 
        <></>
     );
}
 
export default SearchBar;