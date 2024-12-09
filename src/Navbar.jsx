import React from 'react'
export default function Navbar() {
  return (
    <>
    <div className="upper-section">
        <div className="right-section">
        <i class="arrow-button fa-solid fa-angle-left"></i>
        <i class="arrow-button fa-solid fa-angle-right"></i>
        </div>
        <div className="left-section">
            <p className="button">Explor premium</p>
            <p className="button">Install App</p>
        </div>
    </div>
    <div className="lower-section">
        <p className="button">All</p>
        <p className="button">Music</p>
        <p className="button">PodCasts</p>
    </div>
    </>
  )
}
