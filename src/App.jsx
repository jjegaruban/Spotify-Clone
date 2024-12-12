import React, { useContext, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Display from './Components/Display';
import { PlayerContext } from './Context/PlayerContext';
import Player from './Components/Player'; 

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.file; // audio source
      audioRef.current.play(); 
    }
  }, [track, audioRef]);

  return (
    <div className='h-screen bg-black flex flex-col'>
      <div className='h-[90%] flex'> 
        <Sidebar />
        <Display /> 
      </div>
      <Player /> 
      <audio ref={audioRef} preload='auto' />
    </div>
  );
};

export default App;



