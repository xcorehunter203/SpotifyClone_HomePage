import React from 'react';
import { useParams } from 'react-router-dom';
import Songs from './Songs.jsx';
import image from './assets/song1.jpg';
import image1 from './assets/song2.jpg';
import image2 from './assets/song3.jpeg';

export default function AlbumPage() {
  const { albumName } = useParams();

  return (
    <>
      <div className="Album-header">
        <img src={image} alt="Album Cover" />
        <div className="right-album-section">
          <p>Playlists</p>
          <h1 className="Album-name">{albumName}</h1>
          <p className="Album-desc">Your weekly update of the most played tracks</p>
          <p>1,234,421 likes | <span className='bold'>50 songs,</span> about 2hr 30 min</p>
        </div>
      </div>
      <div className="Songs-dev">
        <div className='num-title'>
          <p>#</p>
          <p>Title</p>
        </div>
        <p>Albums</p>
        <p>Date Added</p>
        <p>Duration</p>
      </div>
      <hr className='line' />
      <Songs num={1} image={image} name="Linkin Park" Albumname="Hybrid Theory" date="2003" duration="3:23" />
      <Songs num={2} image={image1} name="Madonna" Albumname="Like a Virgin" date="1984" duration="2:22" />
      <Songs num={3} image={image2} name="Ed Sheeran" Albumname="Divide" date="2017" duration="3:15" />
    </>
  );
}