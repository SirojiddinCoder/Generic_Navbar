import React,{useState} from 'react'
import { Container,Logo,LogoWrapper,LinkGroup,ItemGroup,WrapperHeader,Link } from './style';
import {navbar} from '../../utils/navbar'
import logo from '../../assets/img/LogoBrand.png'


function Navbar() {

  const [active,setActive] = useState('/home')
    return (
       <>
        <WrapperHeader >

<Container>
          <LogoWrapper>
          <Logo src={logo} alt='logoBrand' />
          </LogoWrapper>
          <LinkGroup>
          {
            navbar.map((value)=>(
              <Link
           
             onClick={()=>setActive(value.path)}
               active={active === value.path}  
               to={value.path}
               >{value.title}</Link>
            ))
          }
          
          </LinkGroup>
       <ItemGroup>
        <h3>Item1</h3>
        <h3>Item2</h3>
        <h3>Item3</h3>
       </ItemGroup>
         
        </Container>
        </WrapperHeader>
    
       </>
    )
}

export default Navbar;
