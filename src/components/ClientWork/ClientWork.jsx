import React from 'react';
import { Link } from 'react-router-dom';
import './ClientWork.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ClientWork = () => {
  return (
    <div className='container-fluid mt-5 works'>
        <h1 className='work-title'>SOME OF OUR RECENT <br /> CLIENT WORK</h1>
        <p className='work-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia, reiciendis eius iste eum recusandae facere itaque consequuntur! <br /> Ex laborum rerum culpa autem provident aliquam dolores vitae tempora officiis quidem.</p>
        <div className="row mt-5">
            <div className="col-md-6 p-5">
                <div className="card">
                    <img src="https://miro.medium.com/max/828/1*Hoazav9ziK9WWelZoaVJPg.webp" className='card-img-top' alt="NFT App Development" height='350' />
                    <div className="card-body">
                        <div className='d-flex'>
                            <h5 className='card-title'>NFT App Development</h5>
                            <p>App Design</p>
                        </div>
                        <Link>Full Case Study <span><ChevronRightIcon/></span></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <img src="https://cdn.bfldr.com/F97BMUF5/at/pvxh8j-g69jqo-2i2eze/logo-vs-brand.png?format=png&auto=webp&width=900" className='card-img-top' height='450' alt="Branding & Logo" />
                    <div className="card-body">
                        <div className='d-flex'>
                            <h5 className='card-title'>Branding & Logo</h5>
                            <p>Logo Design</p>
                        </div>
                        <Link>Full Case Study <span><ChevronRightIcon/></span></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-6">
                <div className="card">
                    <img src="https://www.superheuristics.com/wp-content/uploads/2018/06/Marketing-Plan_-the-strategy2.jpg" className='card-img-top' height='450px' alt="Marketing Plan" />
                    <div className="card-body">
                        <div className='d-flex'>
                            <h5 className='card-title'>Branding & Logo</h5>
                            <p>Marketing</p>
                        </div>
                        <Link>Full Case Study <span><ChevronRightIcon/></span></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 p-5">
                <div className="card">
                    <img src="https://www.zerodesigns.in/assets/uploads/2021/10/UX-Design-1024x683.jpg" className='card-img-top' alt="NFT App Development" height='350' />
                    <div className="card-body">
                        <div className='d-flex'>
                            <h5 className='card-title'>NFT App Development</h5>
                            <p>App Design</p>
                        </div>
                        <Link>Full Case Study <span><ChevronRightIcon/></span></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='more text-center'>
            <a className='more-works' href='www.google.com'>SEE MORE WORKS <span><ChevronRightIcon/></span></a>
        </div>
    </div>
  )
}

export default ClientWork