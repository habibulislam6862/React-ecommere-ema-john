import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Manage from './components/Manage/Manage';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends React.Component {
  render(){
    return(
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Shop  getCartData={this.getCartData}/>}/>
          <Route path="/order-review" element={<OrderReview/>} />
          <Route path="/manage" element={<Manage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/*" element={<PrivateRoute/>} >
            <Route path="shipping" element={<Shipping/>} />
          </Route>
        </Routes>
      </AuthProvider>
    )
  }
}
export default App;
