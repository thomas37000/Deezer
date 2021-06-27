/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import artistApi from '../api/artistsApi';

const Artist = () => {
  const [datas, setDatas] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get(artistApi).then((res) => {
      setArtists(res.data.artist);
      console.log('artist data', res.data.artist);
    });
  }, []);

  return (
    <>
      <div className=''>
        <AlbumCard key={datas.id} data={datas} />
      </div>
    </>
  );
};

export default Artist;
