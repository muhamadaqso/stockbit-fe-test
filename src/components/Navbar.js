import React, {Component} from 'react';
import singleLogo from '../assets/img/movies-logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
      }

      mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/?search='+this.state.search)
        window.location.reload()
      }

      myChangeHandler = (event) => {
        this.setState({search: event.target.value});
      }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark shadow-sm sticky-top">
                <div className="container">
                    <a href="/" className="navbar-brand font-weight-semibold" >
                    <img src={singleLogo}  alt="" width="30" height="30" className="d-inline-block align-text-top me-3" />
                    MovIDN
                    </a>
                    <form className="d-flex" onSubmit={this.mySubmitHandler}>
                        <input className="form-control me-2" type="text" 
                        placeholder="Search" aria-label="Search"
                        onChange={this.myChangeHandler}/>
                        <button className="btn btn-light" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
            </nav>
        );
      }
}
  
  export default withRouter(NavBar);