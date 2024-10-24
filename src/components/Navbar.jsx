import React from 'react'
import logo from "../Assets/logo.svg"
import { BsCart4 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { CommentRounded } from '@mui/icons-material';
import { Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import { PhoneRounded } from '@mui/icons-material';
import { ShoppingCartRounded } from '@mui/icons-material';
import List from "@mui/material/List"; 

function Navbar(){
  const[openMenu,setOpenMenu]=React.useState(false)
  const menuOptions=[
    {text:"Home",
     icon:<HomeIcon/> 
    },
    {text:"About",
    icon:<InfoIcon/>},

    {text:"Testimonials",
    icon:<CommentRounded/>},

    {
      text:"Contact",
     icon:<PhoneRounded/>
    },

    {
      text:"Cart",
     icon:<ShoppingCartRounded/>
    },
  ]
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="logo image"></img>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="https://www.lipsum.com/">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href=""><BsCart4 className="navbar-cart-icon"/></a>
        <button className='primary-button'>Order Now</button>
      </div>
      <div className='navbar-menu-container'> <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/></div>
      <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor='right'>
          <box sx={{width:250}} 
          role="presentation" 
          onClick={()=>setOpenMenu(false)} 
          onKeyDown={()=> setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
               <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItemButton>
               </ListItem>
            ))}
          </List>
          </box>
      </Drawer>
    </nav>
  )
}
  
export default Navbar;
