import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexShrink: "1",
    width:"100vh",
    margin: "5rem 0rem 0rem 62rem",
    flexWrap: "wrap",
    backgroundColor: "antiquewhite",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width:"70%",
    fontSize:"2rem",
    fontStyle:"italic"
  }
});

const CartAmountDetails = (props) => {
  const classes = useStyles();
  let gstTax = 50,tax = 15,totalAmount = (props.addPrice+gstTax+tax).toFixed(2);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography className={classes.totalAmount}>Total:</Typography><span className={classes.alignAmount}> {props.addPrice ? props.addPrice.toFixed() : 0} Rs.</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography className={classes.totalAmount}>GST:</Typography><span className={classes.alignAmount}>{gstTax} Rs.</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography className={classes.totalAmount}>Tax:</Typography><span className={classes.alignAmount}>{tax} Rs.</span>
        </div>
        <Divider light />
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography className={classes.totalAmount}>GrandTotal:</Typography><span className={classes.alignAmount}>{props.addPrice ? totalAmount : 0}Rs.</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default CartAmountDetails