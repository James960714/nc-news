import {Link} from 'react-router-dom'

const Header = () => {
return(
<header id='header'>
     <h1 className='heading'>NC NewsIt</h1>
     <nav>
          <Link className='headerNavLinks' to='/'>Articles</Link>
          <Link className='headerNavLinks' to='/profile'>Profile</Link>
     </nav>
</header>)
}

export default Header;

