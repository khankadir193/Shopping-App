import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ApiCall from './ApiCall';
import NewsDetails from './NewsDetails';
//import { Route, Routes,useNavigate} from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import { useParams,useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  margin: "100px",
  display: "inline-block",
  width: '400px',
  height: "400px",
  // perspective: "700px",
  // alignItems: "center"

  },
});

const CardComponent = () => {
    const classes = useStyles();
    const [clothData,setClothData] = React.useState();

    const navigate = useNavigate();

    // const name = "abdul kadir khan"
    
    // useEffect(() => ApiCall());
    
    useEffect(()=>{
        // const response = ApiCall();
        // console.log('respone..Api..',response);
        handleApi();
    },[0]);

    const handleApi = async()=>{
        const response = await ApiCall();
        setClothData(response);
        console.log('respone..Api..',response);
        //console.log('handleApi call function');
        //await ApiCall()
    }

    const handleNewsDetails = (index)=>{
      console.log('clothData...///',clothData[index].id);
      navigate('/newsDetails',{state:{value:clothData[index]}});
    }
    return (
      clothData?.map((item,index)=>{
       return(
        // <>
        <Card className={classes.root} onClick = {()=>{handleNewsDetails(index)}} key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.image}
              title={item.category}
              // onClick={handleNewsDetails}
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
        // </>
       )
      })
    );
}
export default CardComponent;


// function App() {
//   return (
//   <>
//     <Routes>
//     <Route path ="/" element={<Main />} />
//     <Route path ="gigs" element={<Gigs />} />
//     </Routes>
// </>
//   );
// }

 // item.id === index+1 ? <Routes> <Route exact path="/pageDetails" element={NewsDetails} /> </Routes>  : null 
            // showNews === index ? <NewsDetails />   : null

//https://stackoverflow.com/questions/65425884/react-router-v6-error-useroutes-may-be-used-only-in-the-context-of-a-route
// reference url
//https://www.youtube.com/watch?v=WHdfI-ZsXbk

// https://fakestoreapi.com/products/1


          {/* {
            item.id === index+1 ? <Routes> <Route path="/pageDetails" element={NewsDetails} /> </Routes>  : null 
            // showNews === index ? <NewsDetails />   : null
            // showNews === index ? <Routes> <Route path="/pageDetails" element={NewsDetails} /> </Routes>  : null 
            //showNews === index ? <PrivateRoute path="/newDetails" component={NewsDetails} />: null 
            // showNews ? window.open(`/insert/your/path/here/${name}`)  : null 
          } */}

                    {/* <a href={item.url}>Read More</a> */}



                    // {
                    //   item.id === showNews+1 ? <NewsDetails abdulkadirkhan={item.id} /> : ''
                    //  }
                    