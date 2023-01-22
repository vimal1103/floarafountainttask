import React from 'react'
import HeroSection from './HeroSection/HeroSection.jsx';
import StartProject from './StartProject/StartProject.jsx';
import Services from './Services/Services.jsx';
import ClientWork from './ClientWork/ClientWork.jsx';
import ClientFeedBack from './ClientFeedBack/ClientFeedBack.jsx'
import DiscussProject from './DiscussProject/DiscussProject.jsx';
import Footer from './Footer/Footer.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StartProject/>
      <Services />
      <ClientWork/>
      <ClientFeedBack/>
      <DiscussProject />
      <Footer/>
    </>
  )
}

export default Home