/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import genresApi from '../api/genresApi';

const Genre = () => {
  const [datas, setDatas] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(genresApi).then((res) => {
      setGenres(res.data.genres);
      console.log('genres data', res.data.genres);
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

export default Genre;
