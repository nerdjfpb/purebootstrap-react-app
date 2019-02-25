import React, {Component} from 'react';

class Progress extends Component{
    render(){
        return(
        <div>
            <section className="p-5" id="prog">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="text-warning display-2">Progress</h1>
                        <p className="lead text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-10 text-secondary">
                        <h2>HTML</h2>
                        <div className="progress bg-secondary mb-3">
                        <div className="progress-bar" style={{ 'width':'50%' }}>
                            50%                
                        </div>
                        </div>
                        <h2>CSS</h2>
                        <div className="progress bg-danger mb-3">
                        <div className="progress-bar" style={{ 'width':'70%' }}>
                            70%                
                        </div>
                        </div>
                        <h2>JAVASCRIPT</h2>
                        <div className="progress bg-warning mb-3">
                        <div className="progress-bar" style={{ 'width':'90%' }}>
                            90%                
                        </div>
                        </div>
                        <h2>BOOTSTRAP</h2>
                        <div className="progress bg-success mb-3">
                        <div className="progress-bar" style={{ 'width':'90%' }}>
                            95%                
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

export default Progress;