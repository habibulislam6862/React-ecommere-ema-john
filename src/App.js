import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

class App extends React.Component {


  
 

  render(){


    
    return(
      <>
      
      <Header/>
      <Products  getCartData={this.getCartData}/>
      
      
      </>
    )
  }
}
export default App;
