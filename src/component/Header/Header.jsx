import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function Header() {
  const user= useSelector((state)=> state.auth.login?.currentUser);
  
  return (
    <div className='Header'>
      <img className='Header_Logo' src={process.env.PUBLIC_URL + '/image/logotrv.png'} alt='logo' />

      <div className='Header_Profile'>
        <div className='header-itemBody'>
         <Link to={'/tickets'}> <div>Travel Ticket</div></Link>
          <Link to={'/blog'}><div>Travel blog</div></Link>
        </div>
        {user? <div className='userHeader'>
        <h3 className='Header_NameProfile'>{user.userName}</h3>
        <img className='Header_icProfile' src={process.env.PUBLIC_URL + '/image/username-removebg-preview.png'}/>
                          
                          </div>:<div><Link to={"/login"}><button >Login</button></Link></div>}
                            
                        
      </div>
    </div>
  )
}
