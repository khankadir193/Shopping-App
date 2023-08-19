import React from 'react'
import HeaderMenu from './HeaderMenu';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import mypic from './khankadir.jpg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:"space-around",
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: '500px',
    height: '500px',
  },
  about:{
    fontSize:"xxx-large",
    fontFamily:'"Arial", sans-serif',
    fontWeight:"bold",
    fontStyle:"italic",
    animation: 'slide-in 2s ease infinite'

  },
  prof:{
    fontSize:"large",
    fontStyle:"italic",
    //-webkit-text-stroke
    //important unique color
    WebkitTextStroke: '1px #333', // Note the capitalization and prefix
    color: 'cornsilk'
  }
  
}));

function calculateAgeDetails(dateOfBirth) {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);

  const ageInMillis = currentDate - birthDate;
  
  const years = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(ageInMillis % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(ageInMillis % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
  const hours = Math.floor(ageInMillis % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(ageInMillis % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(ageInMillis % (1000 * 60) / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}


const About = () => {
  const classes = useStyles();
  const ageDetails = calculateAgeDetails('1998-09-23');

  return (
    <div>
      <HeaderMenu about="aboutPage" />
      <div className={classes.root}>
        <div>
          <Avatar alt="Remy Sharp" src={mypic} className={classes.large} />
        </div>
        <div style={{backgroundColor:'whitesmoke'}}>
          <Typography className={classes.about}>Name:Abdul Kadir Khan</Typography>
          <Typography className={classes.about}>Age: <span style={{fontSize:"40px"}}>{ageDetails.years} Year</span> <span style={{fontSize:"36px"}}>{ageDetails.months} months</span> <span style={{fontSize:"32px"}}>{ageDetails.days} days</span> <span style={{fontSize:"32px"}}>{ageDetails.hours} hours</span> <span style={{fontSize:"28px"}}>{ageDetails.minutes} minutes</span> <span style={{fontSize:"24px"}}>{ageDetails.seconds} seconds</span></Typography>
          <Typography className={classes.prof}>Profession: 
          <span>
            Hi My Name is Abdul Kadir Khan. I am Software Engineer i am working on Unifo Solutions as a 
            fullstack developer. i have 2 year experience. i am learning new things to build my ownself to imporve for future endevoure.
            With a completed master's degree that focused on computer programming and specific applications from VIT Bhopal, 
            I have solidified my knowledge and honed my skills in the field. Through my academic journey, 
            I have gained a comprehensive understanding of software development concepts and best practices.
          </span>
          </Typography>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.62469410567!2d83.32151059790411!3d26.763691325989278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692377816821!5m2!1sen!2sin" width="99.5%" height="265px" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default About;
