import "./home.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { Link } from 'react-router-dom'

import resume from '../../assets/pdf/AustinCarr.pdf'

export default function Home() {

    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, {
          showCursor: true,
          startDelay: 3000,
          typeSpeed: 500,
          cursorChar: "_",
          loop: false,
          strings: ["AUSTIN CARR"],
        });
    },[])

  return (
      <div className="home" id="home">
        <div className="imgContainer">
          <div className="hello">
            <h1><span ref={textRef}></span></h1>
          </div>
          <div className="menu">
            <Link to="/about">
            <h4>
              About
            </h4>
            </Link>
            <a href={resume} target="_blank" rel="noreferrer">Resumé</a>
          </div>
        </div>
      </div>
  )
}
