import React from 'react';

export default function AlbumCard({ data }) {
  const { cover, picture, name, title } = data;

  return (
    <>
      <div className='cardAlbum'>
        <div className='artiste'>
          <div>{picture}</div>
          <div>{name}</div>
        </div>
        <div className='album'>
          <img src={cover} alt={title} />
          <div>{title}</div>
        </div>
      </div>
    </>
  );
}
