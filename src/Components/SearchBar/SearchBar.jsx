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
            <div className="col">
                <h3 className="d-flex justify-content-center">Search and Filter</h3>
            <form>
                <div className="row spacing padding-lr">
                    <label className='col-sm col-form-label label-styling'>Filter Entire Table</label>
                    <input className='col-sm-8 form-control' type='text' id='inputToFilter' onKeyUp={filteredResults} placeholder='Filter entire table by...' title='Filter music library by... '/>
                </div>

                <div className="row spacing padding-lr">
                    <label className='col-sm col-form-label label-styling'>Filter By Title</label>
                    <input className='col-sm-8 form-control' type='text' id='title' onKeyUp={() => filterByColumn("title", 0)} placeholder='Name of Title' />
                </div>
                <div className="row spacing padding-lr">
                    <label className='col-sm col-form-label label-styling'>Filter By Artist</label>
                    <input className='form-control' type='text' id='artist' onKeyUp={() => filterByColumn("artist", 1)} placeholder='Artist Name' />
                </div>

                <div className="row spacing padding-lr">
                    <label className='col-sm col-form-label label-styling'>Filter By Album</label>
                    <input className='form-control' type='text' id='album' onKeyUp={() => filterByColumn("album", 2)} placeholder='Album Name' />
                </div>

                <div className="row spacing padding-lr">
                    <label className='col-sm col-form-label label-styling'>Filter By Date</label>
                    <input className='form-control' type='text' id='release-date' onKeyUp={() => filterByColumn("release-date", 3)} placeholder='Release Date' />
                </div>

                <div className="row spacing padding-lr">
                    <label className='col-sm col-form-label label-styling'>Filter By Genre</label>
                    <input className='form-control' type='text' id='genre' onKeyUp={() => filterByColumn("genre", 4)} placeholder='Genre' />
                </div>

            </form>
            </div>
        </div>
     );
}
 
export default SearchBar;