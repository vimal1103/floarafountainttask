import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './StartProject.css';

const StartProject = () => {
  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-5 col-sm-12">
                <div className="d-flex">
                    <p><span><CheckIcon/></span> 24/7 Online Service</p> &nbsp;&nbsp;&nbsp;&nbsp;
                    <p><span><CheckIcon/></span> Quick Services</p>
                </div>
                <div className="content mt-4">
                    <p className='start-para'>Saving World With Good Design. Because your satisfation is everything. We are providing the best design.</p>
                    <button className='projectStart mt-3'>START A PROJECT</button>
                </div>
            </div>
            <div className="col-md-7">
            <iframe width="860" height="380" src="https://www.youtube.com/embed/QyhwSYhX09s" title="YouTube video player"></iframe>
            </div>
        </div>
    </div>
  )
}

export default StartProject