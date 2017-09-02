import React from 'react';

// Component
import InputText from './InputText.jsx';

require('../styles/styles.scss');

class CaseStudy extends React.Component {

    constructor(){
        super();
        this.state = {
            place: '',
            name: '',
            email: '',
            step: 1,
        }
    }

    handleChanges(e){
        this.setState({
            [e.target.dataset.type]: e.target.value,
        })
        console.log(this.state)
    }

    nextStep(){
        this.setState(
            {
                step: this.state.step + 1,
            }
        )
    }

    previousStep(){
        this.setState(
            {
                step: this.state.step - 1,
            }
        )
    }

	render() {

		return (
			<div className="container">

                <div className="jumbotron">
                    <h1 className="display-3">Case Study</h1>
                    <p className="lead">React Js and Google Places Api</p>
                </div>
                
                
                <div style={{display: this.state.step == 1 ? 'block' : 'none' }}>
                    <h5>Step 1</h5>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Where are you from?</label>
                        <InputText class="place form-control" type="place" callback={this.handleChanges.bind(this)} placeholder="Citie" value={this.state.place}/>
                        
                    </div>
                    <button  onClick={this.nextStep.bind(this)} className="btn btn-primary">Next</button>
                </div>

                <div style={{display: this.state.step == 2 ? 'block' : 'none' }}>
                    <h5>Step 2</h5>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tell us your name</label>
                        <InputText class="name form-control" type="name" callback={this.handleChanges.bind(this)} placeholder="Name" value={this.state.name}/>
                    </div>

                    <button onClick={this.previousStep.bind(this)} className="btn btn-primary">Previous</button> <button onClick={this.nextStep.bind(this)}  className="btn btn-primary">Next</button>
                </div>

                <div style={{display: this.state.step == 3 ? 'block' : 'none' }}>
                    <h5>Step 3</h5>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Your e-mail here</label>
                        <InputText class="email form-control" type="email" callback={this.handleChanges.bind(this)} placeholder="E-mail" value={this.state.email}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button  onClick={this.previousStep.bind(this)} className="btn btn-primary">Previous</button> <button  onClick={this.previousStep.bind(this)} className="btn btn-primary">Submit</button>
                </div>
                
			</div>
		)
	}
}

export default CaseStudy;