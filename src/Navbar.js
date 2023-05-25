import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#FF7855', display: 'flex', height: '60px' }}>
       <ul style={{ display: 'flex', listStyleType: 'none', margin: '0', padding: '2000' }}>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Home" style={{ fontSize: '18px',color:'white' }}>Home</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Invoices" style={{ fontSize: '18px',color:'white' }}>Invoices</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Invoices" style={{ fontSize: '18px' ,color:'white'}}>Invoices</a></li>
        <li style={{ marginLeft: '10px' , paddingTop:'20px'}}><a href="/customers" style={{ fontSize: '18px' ,color:'white'}}>Customers</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Products" style={{ fontSize: '18px' ,color:'white'}}>Products</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Reports" style={{ fontSize: '18px' ,color:'white'}}>Reports</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Settings" style={{ fontSize: '18px' ,color:'white'}}>Settings</a></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
