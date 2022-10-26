import React, { useEffect ,useState } from 'react';
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import CreateSongForm from "./Components/CreateSongForm/CreateSongForm";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css"


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
    <div>
      <NavBar/>
      <div className='container-fluid d-flex justify-content-center'>
        <div className="col-sm-8">
          <div className='row d-flex justify-content-center'>
              <div className="col-sm-5 border-box">
                <CreateSongForm createNewSong={createNewSong}/>
              </div>
            
              <div className="col-sm-5 border-box">
                <SearchBar parentSongs={songs}/>
              </div>
          </div>
          <div className="col border-box">
            <DisplayMusic parentSongs={songs}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
