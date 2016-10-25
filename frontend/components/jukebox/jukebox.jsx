import React from 'react';
import Track from './track';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => {
  console.log(tracks);
  return (
    <div>
      <h3>Jukebox</h3>
      {
        Object.keys(tracks).map((id, idx) => <Track key={idx} track={tracks[id]} onPlay={onPlay(tracks[id])}/>)
      }
    </div>
  );
};


export default Jukebox;
