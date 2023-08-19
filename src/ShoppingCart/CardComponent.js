import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ApiCall from './ApiCall';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    margin: "100px",
    display: "inline-block",
    width: '400px',
    height: "400px",
  },
});

const CardComponent = () => {
    const classes = useStyles();
    const [clothData,setClothData] = React.useState();
    const navigate = useNavigate();
    
    useEffect(()=>{

        handleApi();
    
    },[0]);

    const handleApi = async()=>{
        const response = await ApiCall();
        setClothData(response);
    }

    const handleNewsDetails = (index)=>{
      navigate('/newsDetails',{state:{value:clothData[index]}});
    }
    return (
      clothData?.map((item,index)=>{
       return(
        <Card className={classes.root} onClick = {()=>{handleNewsDetails(index)}} key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.image}
              title={item.category}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
       )
      })
    );
}
export default CardComponent;