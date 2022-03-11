import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Manage from './components/Manage/Manage';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

class App extends React.Component {
  render(){
    return(
      <Routes>
        <Route path="/" element={<Shop  getCartData={this.getCartData}/>}/>
        <Route path="/order-review" element={<OrderReview/>} />
        <Route path="/manage" element={<Manage/>} />
      </Routes>
    )
  }
}
export default App;
