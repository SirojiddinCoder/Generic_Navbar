import React from 'react'
import { Container } from './style';
import Navbar from '../Component/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { navbar } from '../utils/navbar';

function Root() {
  console.log(navbar)
    return (

      <BrowserRouter>
      <Navbar />
      <Container>
<Routes>
  {
    navbar.map((item)=>{
      return <Route key={item.id} path={item.path} element={<item.Element />} />
    })
  }

</Routes>
   </Container>
      
      </BrowserRouter>


    

        
    )
}

export default Root;
