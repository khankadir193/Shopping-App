import HeaderMenu from './HeaderMenu'
import { useSelector } from 'react-redux'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state.js';
import Divider from '@material-ui/core/Divider';
import CartAmountDetails from './CartAmountDetails';
import { Grid } from '@material-ui/core';


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
    //margin: "0rem 66rem 3rem 0rem"

    // margin: "4rem 0rem 0rem 3rem"
  },
  media: {
    height: "15rem",
  },
  container: {
    display: "flex",
    //backgroundColor: "red",
    // width: "100%",
    // height: "500vh",
    // margin: "0",
    // border: "5px solid green",
    // padding: "0",
    // justifyContent: "space-around",
    // flexWrap: "wrap",
    flexDirection: "column",
    padding: "10px",
    marginTop: "5rem",
    order:1,
    //overflow:"scroll"
  },
  totalContainer:{
    display:"flex",
    width:"100%",
    //height:"100vh"
  },
  cartAmountContainer:{
    display:"flex",
    // flexWrap:1,
    order: 2,
    position:"fixed"
    // flexWrap:"wrap",
  }
});


const CartDetails = () => {
  const classes = useStyles();
  const [dataValue, setDataValue] = React.useState();
  const dispatch = useDispatch();
  const [addPrice, setAddPrice] = React.useState();

  const data = useSelector(state => state.value);

  React.useEffect(() => {
    console.log('useEffect is calling..', data);
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
    } else {
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
          {/* <CartAmountDetails addPrice={addPrice} /> */}
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



//git hub reference for cart
//https://github.dev/mansi-manhas/Shopping-Cart-React-TypeScript
//https://www.youtube.com/watch?v=lATafp15HWA

// approact how to update the components when onclick gets trigger
//https://bobbyhadz.com/blog/react-update-state-on-click#:~:text=To%20update%20a%20component's%20state,the%20component's%20state%20on%20click.

//this local state updating the redux for dispatching the value
// let obj = {...dataValue[index].cardData,price:dataValue[index].cardData.price += item.cardData.price,itemCount:dataValue[index].cardData.itemCount += 1};
//console.log('obj..',obj);

//setDataValue([{...dataValue,price:dataValue[index].cardData.price += item.cardData.price,itemCount:dataValue[index].itemCount += 1}]);
// console.log('first',first);
// console.log('second..',second);


{/* {index === 0 ? <Card className={classes.root1}>
              <CardContent>
                <Typography className={classes.totalAmount}>Total: <span className={classes.alignAmount}> {addPrice ? addPrice.toFixed() : 0} </span></Typography>
                <Typography className={classes.totalAmount}>GST:<span className={classes.alignAmount}>50 Rs.</span></Typography>
                <Typography className={classes.totalAmount}>Tax:<span className={classes.alignAmount}>15 Rs.</span></Typography>
                <Divider light />
                <Typography className={classes.totalAmount}>GrandTotal:<span className={classes.alignAmount}>0 Rs.</span></Typography>
              </CardContent>
            </Card> : null} */}