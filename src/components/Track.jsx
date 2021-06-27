/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import tracksApi from '../api/tracksApi';

const Track = () => {
  const [datas, setDatas] = useState([]);
  const [titres, setTitres] = useState([]);

  useEffect(() => {
    axios.get(tracksApi).then((res) => {
      setTitres(res.data.tracks);
      console.log('????', res.data);
      console.log('tracks data', res.data.tracks);
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

export default Track;
