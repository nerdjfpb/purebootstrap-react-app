import React, {Component} from 'react';
import img1 from './images/person1.png';
import img2 from './images/person2.png';
import img3 from './images/person3.jpg'

class Team extends Component{
    render(){
        return(
        <div>
            <section className="p-sm-5 p-2 bg-secondary" id="team">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="text-warning display-2">Team</h1>
                        <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-sm-10 mx-auto mb-4">
                        <div className="card">
                        <img src={img1} className="card-image-top" />
                        <div className="card-body">
                            <div className="card-title">
                            <h3 className="text-muted">Micheal</h3>                                  
                            </div>
                            <div className="card-subtitle">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.
                            </p>
                            </div>
                            <div className="text-right">
                            <a href="#"><i className="fab fa-facebook fa-2x mx-2 text-primary"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-2x mx-2 text-info"></i></a>
                            <a href="#"><i className="fab fa-youtube fa-2x mx-2 text-danger"></i></a>
                            </div>               
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-10 mx-auto mb-4">
                        <div className="card">
                        <img src={img2} className="card-image-top" />
                        <div className="card-body">
                            <div className="card-title">
                            <h3 className="text-muted">Jack</h3>                                  
                            </div>
                            <div className="card-subtitle">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.
                            </p>
                            </div>
                            <div className="text-right">
                            <a href="#"><i className="fab fa-facebook fa-2x mx-2 text-primary"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-2x mx-2 text-info"></i></a>
                            <a href="#"><i className="fab fa-youtube fa-2x mx-2 text-danger"></i></a>
                            </div>               
                        </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-sm-10 mx-auto mb-4">
                        <div className="card">
                        <img src={img3} className="card-image-top" />
                        <div className="card-body">
                            <div className="card-title">
                            <h3 className="text-muted">Ann</h3>                                  
                            </div>
                            <div className="card-subtitle">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.
                            </p>
                            </div>
                            <div className="text-right">
                            <a href="#"><i className="fab fa-facebook fa-2x mx-2 text-primary"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-2x mx-2 text-info"></i></a>
                            <a href="#"><i className="fab fa-youtube fa-2x mx-2 text-danger"></i></a>  
                            </div>               
                        </div>
                        </div>
                    </div>   
                    </div>
                </div>
                </section>
            
        </div>

        )
    }
}

export default Team;