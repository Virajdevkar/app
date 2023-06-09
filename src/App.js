import React from 'react';
import SignupPage from './SignupPage';
import Navbar from './Navbar';
import CreateBillPage from './CreateBillPage';
import ShoppingCartPage from './ShoppingCartPage';
import LoginPage from './LoginPage';
import AddItemsPage from './AddItemsPage';
import PaymentsPage from './PaymentsPage';



const App = () => {
  return (
    <div>
      <Navbar />
      <SignupPage />
      <CreateBillPage />
      <ShoppingCartPage/>
      <LoginPage />
      <AddItemsPage/>
      <PaymentsPage />
      {/* Other content of your application */}
    </div>
    
  );
};

export default App;