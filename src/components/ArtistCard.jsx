import React from 'react';
import './data.css';

export default function ArtistCard({ data }) {
  const { picture, name } = data;

  return (
    <>
      <div className='cardAlbum'>
        <div className='artiste'>
          <div className='imgAlbum'>{picture}</div>
          <div className='theArtist'>{name}</div>
        </div>
      </div>
    </>
  );
}
