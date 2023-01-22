import React from 'react';
import './Services.css';
import WebDev from '../../assets/webdevelopment.jpg'
import AppDev from '../../assets/appdevelopment.jpg'
import Marketing from '../../assets/marketing.jpg'
import Branding from '../../assets/branding.jpg'

const Services = () => {
  return (
    <div className='container-fluid mt-5'>
        <h1 className='title'>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti veritatis molestias est perspiciatis quas neque sint accusamus placeat facilis, unde hic optio voluptatibus officia impedit temporibus culpa</p>
        <div className="row mt-5">
            <div className="col-md-3 services">
                  <div className="card" style={{width:'18rem'}}>
                      <img src={WebDev} className="card-img-top" alt="..." />
                          <div className="card-body">
                              <h5 className="card-title">Web Development</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                  </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width:'18rem'}}>
                      <img src={AppDev} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">App Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width:'18rem'}}>
                    <img src={Marketing} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Marketing</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width:'18rem'}}>
                      <img src={Branding} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Branding & Logo</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services