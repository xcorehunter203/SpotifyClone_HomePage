import React from 'react'

export default function Songs(props) {
  return (<>
    <div className="Song">
      <div className='num-title'>
      <h4>{props.num}</h4>
      <img src={props.image} alt="song image" />
      <h3>{props.name}</h3>
      </div>
      <p>{props.Albumname}</p>
      <p>{props.date}</p>
      <p>{props.duration}</p>
    </div>
    <hr className='line' />
    </>
  )
}
