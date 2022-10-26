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

    function filterByColumn(inputId, column){
        console.log(column);
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById(inputId);
        filter = input.value.toUpperCase();
        table = document.getElementById("music-library");
        tr = table.getElementsByTagName('tr');

        for (i = 0; i < tr.length; i++){
            td = tr[i].getElementsByTagName('td')[column];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }

    return ( 
        <div className='border-t box'>
            <form className='form-control'>
                <input type='text' id='inputToFilter' onKeyUp={filteredResults} placeholder='Filter entire table by...' title='Filter music library by... '/>
                <input type='text' id='title' onKeyUp={() => filterByColumn("title", 0)} placeholder='Filter by Title...' />
                <input type='text' id='artist' onKeyUp={() => filterByColumn("artist", 1)} placeholder='Filter by Artist...' />
                <input type='text' id='album' onKeyUp={() => filterByColumn("album", 2)} placeholder='Filter by Album...' />
                <input type='text' id='release-date' onKeyUp={() => filterByColumn("release-date", 3)} placeholder='Filter by Release Date..' />
                <input type='text' id='genre' onKeyUp={() => filterByColumn("genre", 4)} placeholder='Filter by Genre...' />
            </form>

        </div>
     );
}
 
export default SearchBar;