import { Box, Stack } from '@mui/material'
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <Stack
    sx={{paddingTop:'70px'}}
    direction='row'
    spacing={{ xs: 1, sm: 2, md: 3 }}
    justifyContent='space-between'>
        <Box p={1}>
            <h1 className='title'>
                WE ARE <span>WEB3</span> BASED DESIGN AGENCY
            </h1>
        </Box>
        <Box p={1} 
            sx={{
                display:'flex',
                flexDirection:'column', 
                fontSize:'18px', 
                letterSpacing:'1px', 
                textDecoration:'none',
                fontWeight:100,
                textAlign:'end',
                padding:'0px 30px'}}>
            <a href='www.google.com'>Dribble</a>
            <a href='www.google.com'>Instagram</a>
            <a href='www.google.com'>Twitter</a>
        </Box>
    </Stack>
  )
}

export default HeroSection