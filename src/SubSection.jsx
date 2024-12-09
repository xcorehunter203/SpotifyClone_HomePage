import React from 'react';
import { Link } from 'react-router-dom';
import Album from './Albums.jsx';
import GlobalImg from './assets/global.jpeg';
import IndiaImg from './assets/india.jpg';
import NewZeland from './assets/new zeland.jpg';
import EdShereen from './assets/ed shereen.jpeg';
import TrendImg from './assets/topglobal.jpg';
import FavImg from './assets/happy favorites.jpeg';

export default function SubSection() {
  const albums = [
    { image: GlobalImg, name: 'Top 50 Global', desc: 'Your weekly update of the most played tracks' },
    { image: IndiaImg, name: 'Top 50 India', desc: 'Your weekly update of the most played tracks' },
    { image: NewZeland, name: 'Trending India', desc: 'Your weekly update of the most played tracks' },
    { image: TrendImg, name: 'Trending Global', desc: 'Your weekly update of the most played tracks' },
    { image: EdShereen, name: 'This is Ed Shereen', desc: 'Your weekly update of the most played tracks' },
    { image: FavImg, name: 'Happy Favorites', desc: 'Your weekly update of the most played tracks' },
  ];

  return (
    <div className="sub-Section">
      <h2 className="sub-title">Featured Charts</h2>
      <div className="container">
        {albums.map((album, index) => (
          <Link key={index} to={`/album/${encodeURIComponent(album.name)}`}>
            <Album image={album.image} name={album.name} desc={album.desc} />
          </Link>
        ))}
      </div>
    </div>
  );
}