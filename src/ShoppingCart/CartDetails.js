import HeaderMenu from './HeaderMenu'
import { useSelector } from 'react-redux'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state.js';
import CartAmountDetails from './CartAmountDetails';


const useStyles = makeStyles({
  root: {
    '& .MuiCardMedia-root': {
      display: "flex",
      width: "20rem",
      objectFit: "contain",
      backgroundRepeat: "no-repeat",
      height: "21rem",
      marginLeft: "1rem"
    },
    '& .MuiCardActions-root': {
      display: "flex",
      padding: "8px",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-8rem"
    },
    width: "100vh",
    height: "42vh",
  },
  media: {
    height: "15rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    marginTop: "5rem",
    order:1,
  },
  totalContainer:{
    display:"flex",
    width:"100%",
  },
  cartAmountContainer:{
    display:"flex",
    order: 2,
    position:"fixed"
  }
});


const CartDetails = () => {
  const classes = useStyles();
  const [dataValue, setDataValue] = React.useState();
  const dispatch = useDispatch();
  const [addPrice, setAddPrice] = React.useState();

  const data = useSelector(state => state.value);

  React.useEffect(() => {
    let sumOfPriceValue = 0;
    data.map((item) => {
      sumOfPriceValue += item.cardData.price;
    })
    setAddPrice(sumOfPriceValue);
    setDataValue(data);
  }, [data]);

  const incrementDecrement = (item, index, value) => {
    if (value === "+") {
      dataValue[index].cardData.price += (item.cardData.price / dataValue[index].cardData.itemCount);
      dataValue[index].cardData.itemCount += 1;
    } else if(item.cardData.itemCount !== 1) {
      dataValue[index].cardData.price -= Number(item.cardData.price / item.cardData.itemCount);
      dataValue[index].cardData.itemCount -= 1;
    }

    dispatch(actionCreators.updateUser())
    let sumOfPriceValue = 0;
    dataValue.map((item) => {
      sumOfPriceValue += item.cardData.price;
    })
    setAddPrice(sumOfPriceValue);
  }

  return (
    <>
      <HeaderMenu cart="cartDetails" />
      <div className={classes.totalContainer}>
        <div className={classes.cartAmountContainer}>
          <CartAmountDetails addPrice={addPrice} />
        </div>
        <div className={classes.container}>
          {dataValue?.map((item, index) => {
            return (
              <>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.cardData.image}
                      title="Contemplative Reptile"
                      component="img"
                    />
                  </CardActionArea>
                  <Typography>{item.cardData.price}</Typography>
                  <CardActions style={{ marginLeft: "15rem" }}>
                    <Button variant="outlined" color="secondary" onClick={() => { incrementDecrement(item, index, "-") }}>
                      -
                    </Button>
                    <Typography>{item.cardData.itemCount}</Typography>
                    <Button variant="outlined" color="primary" onClick={() => { incrementDecrement(item, index, "+") }}>
                      +
                    </Button>
                  </CardActions>
                </Card>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CartDetails