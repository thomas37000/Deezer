/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';

import { albumsApi, artistApi, genresApi, tracksApi } from '../api/albumsApi';

const Deezer = () => {
  const [datas, setDatas] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [titres, setTitres] = useState([]);

  useEffect(() => {
    axios.get(albumsApi).then((res) => {
      setDatas(res.data);
      setArtists(res.data.artist);
      setGenres(res.data.genres);
      setTitres(res.data.tracks);
      console.log('all datas', res.data);
      console.log('in Deezer artist data', res.data.artist);
      console.log('in Deezer genres data', res.data.genres);
      console.log('in Deezer tracks data', res.data.tracks);
    });
  }, []);

  return (
    <>
      <div className=''>
        <AlbumCard key={datas.id} data={datas} />
        <ArtistCard data={datas} />
      </div>
    </>
  );
};

export default Deezer;
