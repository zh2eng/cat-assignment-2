import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/visitpenang_logo.png'
import { Link } from "react-router-dom"
import Dropdown from '../Dropdown/dropdown'
const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[]);

  // Update the window width state on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if we are on a small screen
  const isSmallScreen = windowWidth <= (866.40);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      {!isSmallScreen ?
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Food">Food</Link></li>
          <li><Link to="/Tourism">Tourist Attractions</Link></li>
          <li><Link to="/Hotels">Hotels</Link></li>
          <li><button className='btn'>Contact Us</button></li>
        </ul>:
        <Dropdown logo='../../assets/hamburger_icon.png'></Dropdown>
      }
      
    </nav>
  )
}

export default Navbar
