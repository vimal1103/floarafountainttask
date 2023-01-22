import React from 'react'
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

const Footer = () => {
  return (
    <>
          <footer
              className="text-center text-lg-start text-white"
              style={{backgroundColor: '#151515'}}
          >
              
              {/*  Section: Links   */}
              <section className="">
                  <div className="container-fluid text-center text-md-start mt-5">
                      {/*  Grid row  */}
                      <div className="row mt-3">
                          {/*  Grid column  */}
                          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                              {/*  Content */}
                              <h6 className="fw-bold" style={{fontSize:'25px', padding:'5px'}}>EX<span>OO</span>TIK</h6>
                            
                              <p style={{fontSize:'16px'}}>
                                  We are Web3 Based digital agency based in USA
                              </p>
                              
                              <div className="icon">
                                <i><FacebookOutlinedIcon/></i>
                                <i><LinkedInIcon/></i>
                                <i><InstagramIcon/></i>
                              </div>
                          </div>
                          {/*  Grid column  */}

                           {/* Grid column  */}
                          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                              {/*  Links  */}
                              <h6 className="text-uppercase fw-bold"><span>Links</span></h6>
                              <p>
                                  <Link to="/" className="text-white">Home</Link>
                              </p>
                              <p>
                                  <Link to="/" className="text-white">Case Studies</Link>
                              </p>
                              <p>
                                  <Link to="/" className="text-white">Contact</Link>
                              </p>
                          </div>
                          {/*  Grid column  */}

                           {/* Grid column  */}
                          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                              {/*  Links  */}
                              <h6 className="text-uppercase fw-bold"><span>Legal</span></h6>
                              <p>
                                  <Link to="/" className="text-white">Privacy Policy</Link>
                              </p>
                              <p style={{maxWidth:'266px'}}>
                                  <Link to="/" className="text-white">Terms and Conditions</Link>
                              </p>
                              <p>
                                  <Link to="/" className="text-white">FAQ</Link>
                              </p>
                          </div>
                          {/* Grid column  */}

                          {/*  Grid column  */}
                          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                              {/*  Links  */}
                              <h6 className="text-uppercase fw-bold"><span>Call us On:</span></h6>
                              <p>0139 2029 2033</p>
                              <br />
                              <h6 className="text-uppercase fw-bold py-2"><span>Find Us On:</span></h6>
                              <p>767 5th street, <br /> 21st Floor, New York, USA</p>
                          </div>
                          {/*  Grid column  */}
                      </div>
                      {/*  Grid row  */}
                  </div>
              </section>
              {/*  Section: Links   */}

               {/* Copyright  */}

               <hr style={{color:'#fff'}} />

              <div
                  className="text-center p-3"
                  style={{backgroundColor: '#151515'}}
              >
                  ©Exootik agency 2022.
                  <a className="text-white" href="www.google.com"
                  >All Rights Reserved</a>
              </div>
              {/*  Copyright  */}
          </footer>

    </>
  )
}

export default Footer