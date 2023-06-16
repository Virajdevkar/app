import React from 'react';
import SignupPage from './SignupPage';
import Navbar from './Navbar';
import ShoppingCartPage from './ShoppingCartPage';
import LoginPage from './LoginPage';

import PaymentsPage from './PaymentsPage';
import SearchPage from './SearchPage';






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
      <Navbar />
      <SearchPage/>

      
      
      {/* Other content of your application
      <LandingPage/>
      import LandingPage from './LandingPage';
      <AddItemsPage/>
      import AddItemsPage from './AddItemsPage';
      <CreateBillPage />
      import CreateBillPage from './CreateBillPage';*/}
    </div>
    
  );
};

export default App;