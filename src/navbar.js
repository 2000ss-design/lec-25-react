import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className="navbar">
        <h1>the SAAD'S blog</h1>
        <Link to="/">home</Link>
        <Link to="/create" >newBlog</Link>

        </nav>        
    );
}
 
export default Navbar ;
