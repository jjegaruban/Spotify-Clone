import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets'; 
import { PlayerContext } from '../Context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams(); 
  const album = albumsData[id]; 
  const {playwithId}=useContext(PlayerContext);

  if (!album) {
    return <p>Album not found</p>; 
  }

  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img src={album.image} alt={album.name} /> 
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.name}</h2> 
          <h4>{album.desc}</h4>
          <p className='mt-1'>
            <img className='inline-block w-5' src={assets.spotify_logo} alt="Spotify logo" /> 
            <b>Spotify</b> • 1,232,323 likes • <b>50 songs</b> • about 2hrs 30mins
          </p>
        </div>
      </div>
      
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
      </div>
      
      <hr />

      {
        songsData.map((item, index) => (
          <div onClick={()=> playwithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer py-2'>
            <div className='flex items-center'>
              <p className='text-white mr-4'>{index + 1}</p>
              <img className='w-10 mr-5' src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
            <p>{album.name}</p> 
            <p className='hidden sm:block'>5 days ago</p>
            <p className='text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  );
};

export default DisplayAlbum;


