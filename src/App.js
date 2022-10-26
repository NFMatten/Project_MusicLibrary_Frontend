import NavBar from "./Components/NavBar/NavBar";
import React, { useEffect ,useState } from 'react';
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import axios from "axios";
import CreateSongForm from "./Components/CreateSongForm/CreateSongForm";
import SearchBar from "./Components/SearchBar/SearchBar";


function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  async function createNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  return (
    <div className="container-fluid">
      <NavBar/>
      <CreateSongForm createNewSong={createNewSong}/>
      <SearchBar parentSongs={songs}/>
      <DisplayMusic parentSongs={songs}/>
    </div>
  );
}

export default App;
