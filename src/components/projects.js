import React, {Component} from 'react';
import image1 from './images/project1.jpg';
import image2 from './images/project2.jpg';
import image3 from './images/project3.jpg';
import image4 from './images/project4.jpg';

class Projects extends Component{
    render(){
        return(
            <div>
                <section className="p-5" id="projects">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col text-center mb-3">
                            <h1 className="text-warning display-2">Projects</h1>
                            <p className="lead text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <img src={image1} alt="project1" className="img-thumbnail" />
                            <h2 className="my-3 text-warning">Project One</h2>
                            <p className="text-muted">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-3">
                            <img src={image2} alt="project2" className="img-thumbnail" />
                            <h2 className="my-3 text-warning">Project Two</h2>
                            <p className="text-muted">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-4">
                            <img src={image3} alt="project3" className="img-thumbnail" />
                            <h2 className="my-3 text-warning">Project Three</h2>
                            <p className="text-muted">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div> 
                        <div className="col-lg-3 col-sm-6 mt-5">
                            <img src={image4} alt="project4" className="img-thumbnail" />
                            <h2 className="my-3 text-warning">Project Four</h2>
                            <p className="text-muted">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>           
                        </div>
                    </div>
                    </section>

                
            </div>
        )
    }
}

export default Projects;