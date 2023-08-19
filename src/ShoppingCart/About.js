import React from 'react'
import HeaderMenu from './HeaderMenu';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import mypic from './kadirkhan.jpg'
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
    fontSize:"xxx-large"
  },
  prof:{
    fontSize:"large",
    fontStyle:"italic"
  }
}));

const About = () => {
  const classes = useStyles();


  return (
    <div>
      <HeaderMenu about="aboutPage" />
      <div className={classes.root}>
        <div >
          <Avatar alt="Remy Sharp" src={mypic} className={classes.large} />
        </div>
        <div >
          <Typography className={classes.about}>Name:Abdul Kadir Khan</Typography>
          <Typography className={classes.about}>Age:24</Typography>
          <Typography className={classes.prof}>Profession: 
          <span> Hi My Name is Abdul Kadir Khan. I am Software Engineer i am working on Unifo Solutions as a 
            fullstack developer. i have almost 2 year experience. i am learning new things to build my ownself to imporve for future endevoure.
          </span>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About;
