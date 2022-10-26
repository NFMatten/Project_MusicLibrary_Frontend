const DisplayMusic = (props) => {
    return (
        <div>
            <h3 className="d-flex justify-content-center">Music Library</h3>
            <table className='table' id='music-library'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentSongs.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
    )
}

export default DisplayMusic;