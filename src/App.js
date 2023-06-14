import React from 'react';
import SignupPage from './SignupPage';
import Navbar from './Navbar';
import ShoppingCartPage from './ShoppingCartPage';
import LoginPage from './LoginPage';

import PaymentsPage from './PaymentsPage';





const App = () => {
  return (
    <div>
      <Navbar />
      <SignupPage />
      <LoginPage />
      <Navbar />
      <ShoppingCartPage/>
      
      <Navbar />
      <PaymentsPage />

      
      
  
      
      
      {/* Other content of your application
      
      <AddItemsPage/>
      import AddItemsPage from './AddItemsPage';
      <CreateBillPage />
      import CreateBillPage from './CreateBillPage';*/}
    </div>
    
  );
};

export default App;