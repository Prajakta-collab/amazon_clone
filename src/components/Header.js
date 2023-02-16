import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {

const [{basket}]=useStateValue();  
console.log("basket",basket)
  return (
    <nav className="header">
    <Link to="/">
     {/* L0go ->left img */}
  <img 
  src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" className="header__logo" alt="amazon logo"></img>


    </Link>
   

  {/* Search box*/}
<div className="header__search">
  <input type="test" className='header__searchInput' placeholder='Search Amazon.in'/>
  <SearchIcon className="header__searchIcon"/></div>

    
  {/* 3 Links */}

  <div className="header__nav">
  
  <Link to="/login" className="header__link">
 <div className="header__option">
 <span className="header__optionLineOne">Hello P</span>
  <span className="header__optionLineTwo">Sign In</span>
 </div> 

  </Link>

  <Link to="/checkout" className="header__link">
  <div className="header__option">
  <span className="header__optionLineOne">Returns</span>
   <span className="header__optionLineTwo" >& Orders</span>
  </div> 
 
   </Link>
   <Link to="/login" className="header__link">
   <div className="header__option">
   <span className="header__optionLineOne">Your</span>
    <span  className="header__optionLineTwo">Prime</span>
   </div> 
  
    </Link>

  </div>
  {/* Basket icon with number */}

  <Link to="/checkout" className="header__link">
  <div className="header__optionBasket">

  <ShoppingBasketIcon className="header__optionBasketIcon"/>

  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

  </div>
  </Link>
    </nav>
  )
}

export default Header