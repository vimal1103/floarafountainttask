import React from 'react';
import './DiscussProject.css';

const DiscussProject = () => {
  return (
    <div className='container-fluid mt-5'>
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <h1 className='discuss-title'>LETS DISUCSS <br /> <span className='your'>YOUR</span> <br /> <span className='project'>PROJECT?</span></h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5 contact-form">
                <p>Leave your detail and we will contact with you</p>
                <input type='text' placeholder='Your Name' /> <br />
                <input type='email' placeholder='Your Email'/>
            </div>
            <div className="col-md-5">
                <button className='get-btn'>Get <br /> started</button>
            </div>
        </div>
    </div>
  )
}

export default DiscussProject