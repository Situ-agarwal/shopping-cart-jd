import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../Cart/cartIcon'
import './header.styles.css'
const Header =()=>{
    return (
        <div className='header'>
        <div className='options'>
            <Link className='option' to='/'>Home</Link>
            <Link  className='option'to='/cart'><CartIcon/></Link>
            </div>
        </div>
    )
    }
export default Header;     