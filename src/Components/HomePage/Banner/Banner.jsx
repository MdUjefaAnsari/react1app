import React from 'react'
import './Banner.css'
import { Button } from 'react-bootstrap';
function Banner() {
  return (
    <>
        <div className="banner text-center py-5">
            <video className='position-relative'  width="100%" type="video/mp4" src='1.mp4' autoPlay muted>
            </video>

        <div className=' position-absolute top-0 left-0 w-100 text-white' style={{marginTop:"24%"}}>
        <img className="logoRotate"src="logo192.png" alt="logo" width={100} />
            <h1>MUEDSU</h1>
            <h3>Remove your fresher tag</h3>
            <Button variant='primary' className='btn me-3'>Learn React</Button>
            <Button variant='secondary' className='btn'>Learn JAVA</Button>
        </div>

        </div>
    </>
  )
}

export default Banner;