import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link as ChakraLink
  } from '@chakra-ui/react'
  import logo from '../../assets/logo.png'
  import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#232F3E'}
        padding={'50'}
        marginBottom={'50'}
        >
        <ChakraLink as={Link} w={'5%'} to='/' >
          <Image w={'100%'} src={logo} objectFit={'cover'} />
        </ChakraLink>
        <Menu >
            <MenuButton as={Button} rightIcon={<FaChevronDown />} backgroundColor={'#febd69'}>
                Categorías
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to='/categorias/Remeras'>Remeras</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Buzos'>Buzos</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Pijamas'>Pijamas</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Zapatillas'>Zapatillas</Link>
              </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget/>
    </Flex>
  )
}

export default NavBar
