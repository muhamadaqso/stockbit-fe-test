import singleLogo from '../assets/img/movies-logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
    return (
        <nav className="navbar navbar-light shadow-sm sticky-top">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-semibold" >
                <img src={singleLogo}  alt="" width="30" height="30" className="d-inline-block align-text-top me-3" />
                Movies
                </a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-light" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </nav>
    );
  }
  
  export default NavBar;