import React, { useState } from 'react';
import './ClientFeedBack.css';
import people from './data';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job,  text} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0;
    }
    if(number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <>
      <article className="review d-flex ">
        <span className="quote-icon"><FormatQuoteIcon sx={{fontSize:'200px'}} /></span>
          <div className='feedback d-flex'>
            <div className='feed'>
                <p className="info">{text}</p>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <div className="button-container text-end">
                    <Button className="arrow-btn prev-btn" onClick={prevPerson}><ArrowBackIcon  /></Button>
                    <Button className="arrow-btn next-btn" onClick={nextPerson}><ArrowForwardIcon /></Button>
                </div>
            </div>
          </div>
      </article>
    </>
  )
};

export default Review;