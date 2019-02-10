import React from 'react';
import StyledPlaylistitem from './styles/StyledPlaylistItem';


const Playlistitem = ({ active, played, video }) => {
  return (
    <StyledPlaylistitem active={active} played={played}>
      <div className='wbn-player__video-nr'>{video.num}</div>
      <div className='wbn-player__video-name'>{video.title}</div>
      <div className='wbn-player__video-time'>{video.duration}</div>
    </StyledPlaylistitem>
  )
}

export default Playlistitem