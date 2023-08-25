import React from 'react'
import { Container } from './style';
import { useLocation } from 'react-router-dom';

function Generic() {

  const location = useLocation();

    return (
        <Container>
          <h1>Generic: {location?.pathname}</h1>
        </Container> 
        
    )
}

export default Generic;
