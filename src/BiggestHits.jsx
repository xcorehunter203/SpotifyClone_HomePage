import React from 'react'
import Album from './Albums';
import Song1 from "./assets/song1.jpg"
import Song2 from "./assets/song2.jpg"
import Song3 from "./assets/song3.jpeg"
import Song4 from "./assets/song4.jpg"
import Song5 from "./assets/song5.jpg"
import Song6 from "./assets/song6.png"
export default function BiggestHits() {
    return (
        <div className="sub-Section">
        <h2 className="sub-title">Todays biggest hits</h2>
        <div className="container">
            <Album image={Song1}name="linkin park" desc="in the end"/>
            <Album image={Song2} name="madonna" desc="Hung up"/>
            <Album image={Song3} name="ed sheeran" desc="Shape Of You"/>
            <Album image={Song4} name="dead by Sunrise" desc="Let Down"/>
            <Album image={Song5} name="eminem" desc="never Love Again"/>
            <Album image={Song6} name="Bebe rexha" desc="Im a mess"/>
        </div>
        </div>
    );
}
