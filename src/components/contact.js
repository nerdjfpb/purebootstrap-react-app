import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
        <div>
            <section className="p-5 bg-light" id="contact">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="text-warning display-2">Contact</h1>
                        <p className="lead text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="text-center text-secondary">
                        <h2>Got QUestion?</h2>
                        <p>Stay Connected</p>
                        </div>
                        <form className="text-muted">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" className="form-control" rows="3"></textarea>
                        </div>
                        <button className="btn btn-outline-warning btn-block btn-lg" type="submit">Submit Question</button>
                        </form>
                    </div>
                    </div>
                    
                </div>
                </section>
            
        </div>
        )
    }
}

export default Contact;