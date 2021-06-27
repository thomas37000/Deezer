import React from 'react';
import './data.css';

export default function AlbumCard({ data }) {
  const { cover, title } = data;

  return (
    <>
      <div className='cardAlbum'>
        {/* <div className='artiste'>
          <div className='imgAlbum'>{picture}</div>
          <div className='theArtist'>{name}</div>
        </div> */}
        <div className='album'>
          <img src={cover} alt={title} />
          <div className='title'>{title}</div>
        </div>
      </div>
    </>
  );
}
