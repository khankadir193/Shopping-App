// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderMenu from './HeaderMenu';
import { TextareaAutosize } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import IconButton from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
      height: "5vh",
      borderRadius: "15px"
    },
    // '& .MuiSvgIcon-root' : {
    //   height:"4em",
    //   fontSize:"5rem"
    // },
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    marginTop: "1rem",
    //backgroundColor: "purple"
  },
  socialMediaICon: {
    height: "4em",
    fontSize: "5rem"
  }
}));

const contactForm = {
  textAlign: "center",
  //backgroundColor:"aqua",

}


function Contact() {
  const [state, handleSubmit] = useForm("xbjewdqp");

  const classes = useStyles();

  console.log('state', state);
  console.log('handleSubmit....???', handleSubmit);


  if (state.succeeded) {
    return <p>Thanks for Submiting The Page!</p>;
  }

  const handleInstagramClick = () => {
    // Handle the Instagram link click event, e.g., open in a new tab
    window.open('https://instagram.com/abdul_kadir_pathan786?igshid=MzNlNGNkZWQ4Mg==', '_blank');
  };

  const handleFacebookClick = () => {
    // Handle the Instagram link click event, e.g., open in a new tab
    window.open('https://www.facebook.com/profile.php?id=100009120728312', '_blank');
  };

  const handleLinkedClick = () => {
    // Handle the Instagram link click event, e.g., open in a new tab
    window.open('https://www.linkedin.com/in/abdul-kadir-khan-b303aa1a3', '_blank');
  };



  return (
    <>
      <HeaderMenu contact="contactPage" />
      <div style={contactForm}>
        <Typography style={{ fontSize: "xxx-large", }}>Contact Us</Typography>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xbjewdqp" method='POST' className={classes.root} >
          <TextField type="text" name="firstName" label="Enter your first name" color="secondary" required autoComplete='off' />
          <TextField type="text" name="lastName" label="Enter your last name" color="secondary" required autoComplete='off' />
          <TextField type="email" name="email" label="Enter your mail" color="secondary" required autoComplete='off' />
          {/* <textarea coloumn={40} rows={70} name="message" placeholder="Enter your message" type="text" required autoComplete='off' /> */}
          <TextareaAutosize aria-label="minimum height" minRows={10} name="message" placeholder="Enter your message" type="text" required autoComplete='off' />
          <Button variant="contained" color="secondary" type='submit' disabled={state.submitting}>
            Submit
          </Button>
        </form>
        <div>
          <span className={classes.socialMediaICon} >
            {/* <a href='https://instagram.com/abdul_kadir_pathan786?igshid=MzNlNGNkZWQ4Mg==' target='_blank'><InstagramIcon color="action" fontSize="large" /> </a> */}
            <IconButton aria-label="Instagram" onClick={handleInstagramClick}>
            <InstagramIcon color="action" fontSize="large" /></IconButton>
            <IconButton aria-label="Instagram" onClick={handleFacebookClick}>
            <FacebookIcon color="action" fontSize="large" /></IconButton>
            <IconButton aria-label="Instagram" onClick={handleLinkedClick}>
            <LinkedInIcon color="action" fontSize="large" /> </IconButton>
          </span>
        </div>
      </div>
    </>
  );
}

export default Contact;


//formspree url for proper guide tutorial

//https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library