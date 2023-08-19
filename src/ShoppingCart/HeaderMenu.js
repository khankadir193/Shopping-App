import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiAppBar-colorPrimary':{
        backgroundColor: 'black',
        boxShadow: 'none',
        paddingTop: '10px',
        color: '#FFFFFF',
        position:'fixed',
        //latest changes
        display:"flex",
        flexDirection:"row-reverse"
    },
    flexGrow: 1,
  },
  root1: {
    '& .MuiAppBar-colorPrimary':{
        backgroundColor: 'black',
        boxShadow: 'none',
        paddingTop: '10px',
        color: '#FFFFFF',
        //position:'fixed'
        //latest chagnes
        display:"flex",
        flexDirection:"row-reverse"
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration:"none",
    //new changes
    marginRight:"2rem"
  },
}));

const HeaderMenu = (props)=> {
    const classes = useStyles();
    return (
        <div className={props.about === 'aboutPage' || props.contact === 'contactPage'  ? classes.root1 : classes.root }>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
               <NavLink style={{textDecoration:"none"}} to="/"> Home </NavLink>
              </Typography>
              <Typography variant="h6" className={classes.title}>
              <NavLink style={{textDecoration:"none"}} to="/about"> About </NavLink>
              </Typography>
              <Typography variant="h6" className={classes.title}>
              <NavLink style={{textDecoration:"none"}} to="/contact"> Contact </NavLink>
              </Typography>
              <NavLink to="/cartDetails"><ShoppingCartIcon /></NavLink>
            </Toolbar>
          </AppBar>
        </div>
    );
}

export default HeaderMenu;

// for while click on add to cart in that hearder component will be called and i am passing this conditions..
// || props.cart === 'cartDetails'
