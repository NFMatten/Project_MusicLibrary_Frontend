import './SearchBar.css'


const SearchBar = (props) => {
    function filteredResults() {
        const trs = document.querySelectorAll('#music-library tr:not(.hearder)')
        const filter = document.querySelector('#inputToFilter').value
        const regex = new RegExp(filter, 'i')
        const isFoundInTds = td => regex.test(td.innerHTML)
        const isFound = childrenArr => childrenArr.some(isFoundInTds)
        const setTrStyleDisplay = ({style,children}) => {
            style.display = isFound([
                ...children
            ]) ? '' : 'none'
        }
        trs.forEach(setTrStyleDisplay)
    }

    return ( 
        <div>
            <input type='text' id='inputToFilter' onKeyUp={filteredResults} placeholder='Filter by Artist...' title='Type in an Artist Name'/>
            <button >Filter</button>
        </div>
     );
}
 
export default SearchBar;

// TODO: 
//      During filter, Table Header disappears. Need to look into.
// 