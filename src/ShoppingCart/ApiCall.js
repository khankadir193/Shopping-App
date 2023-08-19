const ApiCall = async () => {
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  }catch(err){
    console.log('Api calling is failed...',err);
  }
}

export default ApiCall;
