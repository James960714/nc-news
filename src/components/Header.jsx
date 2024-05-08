import {Link} from 'react-router-dom'

const Header = () => {
return(
<header id='header'>
     <h1 className='heading'>NC NewsIt</h1>
     <nav>
          <Link to='/'><button className='headerButton'>Articles</button></Link>
          <Link to='/profile'><button className='headerButton'>Profile</button></Link>
     </nav>
</header>)
}

export default Header;

