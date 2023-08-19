const ApiCall = async () => {
  try{
    // fetch('https://fakestoreapi.com/products/1').then(res=>res.json()).then(json=>console.log(json))
    const response = await fetch('https://fakestoreapi.com/products');
    //console.log('response...???',response);
    return response.json();
  }catch(err){
    console.log('Api calling is failed...',err);
  }
}

export default ApiCall;


// my api key
// a145b7c96ea94e568cdef0ffdddb9289
// email:abdulkadirkhan547@gmail.com
// pass: khankadir

//https://newsapi.org/v2/top-headlines?country=us&apiKey=a145b7c96ea94e568cdef0ffdddb9289