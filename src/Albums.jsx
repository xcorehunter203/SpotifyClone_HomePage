import React from 'react'
export default function Album (props) {
  return (
    <>
    <div className="album">
        <img src={props.image} alt="album"/>
        <h3 className="Album-name">{props.name}</h3>
        <p className='Album-desc'>{props.desc}</p>
        <i class="fa-solid fa-heart"></i>
    </div>
    </>
  );
}