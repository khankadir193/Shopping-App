import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import HeaderMenu from './HeaderMenu';
import { useDispatch,useSelector } from 'react-redux';
import { actionCreators } from '../state.js/index.js';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';





const useStyles = makeStyles({
  root: {
    '& .MuiCardContent-root':{
      //old implementation
      // position:"relative",
      // left:"43rem",
      // bottom:"30rem"
      //new implementation..
      position:"relative",
      // left:"24rem",
      bottom:"3rem",
      width:"70%"
     },
    '& .MuiCardMedia-media' :{
      width:"45%",
      height:"56vh",
      position:"relative",
    },
    '& .MuiCardMedia-img':{
      objectFit:"contain",
      transform:'scale(.7)'
    },
    // '& .MuiCardActionArea-root':{
    //   width:"40%",
    //   display:"block",
    //   textAlign:"start",
    //   height:"61vh"
    // },
    '& .MuiButton-textSizeLarge':{
      background:"black",
      width:"100%",
      color:"white",
      position:'relative',
    },
    boxShadow:"none",
    // display: "inline-block",
    // width: '71%',
    // height: "68vh",
    // margin:"7rem 16rem 0"

    //new implementation
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',

      //
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'space-between', // Distributes space between card action areas
      // height: '100%', 
  },
  leftSideItems:{
    display: 'flex',
    justifyContent:"space-between",
    //flex: '10rem 20rem 10rem', // Allow the content to grow and shrink as needed
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between', 
  },
  rightSideItems:{
    display: 'flex',
    justifyContent:"space-between",
    alignItems:"center",

    // display: 'flex',
    // justifyContent: 'space-between',
  }
});

const ProductDetails = (props)=> {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();
  const data = useSelector(state => state.value);

  const handleData = ()=>{
    let isExist = false;
    let newItemData = location.state.value;
    if(data.length > 0){
      data.forEach((item)=>{
        if(newItemData.id === item.cardData.id){
          isExist = true;
          setError(isExist);
        }
      });
    }else{
      isExist = true;
      dispatch(actionCreators.storeData(newItemData))
      setOpen(isExist);
    }

    if(!isExist){
      dispatch(actionCreators.storeData(newItemData))
      setOpen(!isExist);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setError(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  

  return (
  <>
  <HeaderMenu />
  <Card className={classes.root}>
      <CardActionArea className={classes.leftSideItems} >
        <CardMedia
          component="img"
          // alt="Contemplative Reptile"
          height="140"
          image={location.state.value.image}
          title={location.state.value.category}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {location.state.value.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {location.state.value.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.rightSideItems}>
        <div>
          <Button size="small" color="primary" onClick={()=>{navigate('/')}}>
            Go Back
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </div>
        <div>
        <Button size="large" color="primary" onClick={handleData}>
          Add To Cart
        </Button></div>
        </div>
      </CardActions>
    </Card>
    {open ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Item Added Successfully...
        </Alert>
      </Snackbar> : error ? <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Item Already has been Added Successfully...
        </Alert>
      </Snackbar> : ''}
    </>
  )
}

export default ProductDetails;
