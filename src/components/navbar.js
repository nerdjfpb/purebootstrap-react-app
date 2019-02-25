import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
                    <a href="" className="navbar-brand"><i className="fas fa-child text-warning fa-2x"></i></a>
                    <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse justify-content-between" id="nav">
                        <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#contact">Contact</a></li>
                        </ul>
                        <form className="form-inline ml-3">
                        <div className="input-group">
                            <input type="text" placeholder="Search" className="form-control" />
                            <div className="input-group-append">
                            <button type="button" className="btn">
                                <i className="fas fa-search text-muted"></i>
                            </button>
                            </div>          
                        </div>
                        </form>
                    </div>
                </nav>
            </div>
        
        )
    }
}

export default Navbar;