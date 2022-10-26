import React, { useState } from 'react';
import './CreateSongForm.css'

const CreateSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre
        };
        props.createNewSong(newSong);
    }

    return ( 
        <div className='container-fluid border-t box'>
        <form onSubmit={handleSubmit}>
            <div><h3>Add New Song To Music Library</h3></div>
            <div><label>Title</label></div>
            <div><input className='form-control' type='text' placeholder='Enter Song Title' value={title} onChange={(event) => setTitle(event.target.value)} /> </div>

            <div><label>Artist</label></div>
            <div><input className='form-control' type='text' placeholder='Enter Artist Name' value={artist} onChange={(event) => setArtist(event.target.value)} /></div>

            <div><label>Album</label></div>
            <div><input className='form-control' type='text' placeholder='Enter Album Name' value={album} onChange={(event) => setAlbum(event.target.value)}/></div>

            <div><label>Release Date</label></div>
            <div><input className='form-control' type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/></div>

            <div><label>Genre</label></div>
            <div><input className='form-control' type='text' placeholder='Enter Genre' value={genre} onChange={(event) => setGenre(event.target.value)}/></div>

            <div><button className='btn btn-primary' type='submit'>Add Song</button></div>
        </form>
        </div>
     );
}
 
export default CreateSong;



// TODO:
//      Styling 