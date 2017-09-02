import React from 'react';
import axios from 'axios';

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
            errors: false,
            sucessfully: false,
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
                errors: false,
                sucessfully: false,
            }
        )
    }

    previousStep(){
        this.setState(
            {
                step: this.state.step - 1,
                errors: false,
                sucessfully: false,
            }
        )
    }

    checkAndSubmit(){

        let data = {
            place: this.state.place,
            name: this.state.name,
            email: this.state.email,
        }

        let errors = [];

        let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        console.log(errors)
        
        if (data.place == '') errors.push('- There are errors on Step 1');
        if (data.name == '') errors.push('- There are errors on Step 2');
        if (data.email == '' || regexEmail.test(data.email) == false ) errors.push('- There are errors on Step 3');

        if (errors.length) {

            let errorsList = errors.map((item,index)=>{
                return (<li key={index}>{item}</li>)
            })

            this.setState({
                errors: errorsList,
                sucessfully:false,
            })
        } else {
            this.setState({
                errors: false,
                sucessfully:true,
            });
            
            axios.post('/send', {
                data
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });     
        }

    }

	render() {

		return (
			<div className="container">

                <h1 className="display-3">Case Study</h1>
                <p className="lead">React Js and Google Places Api</p>
                
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
                    <button  onClick={this.previousStep.bind(this)} className="btn btn-primary">Previous</button> <button  onClick={this.checkAndSubmit.bind(this)} className="btn btn-primary">Submit</button>
                </div>


                <br />
                
                <div className="alert alert-danger" role="alert" style={{display: this.state.errors ? 'block' : 'none' }}>
                    Please verify the following Steps:
                    {this.state.errors}
                </div>
                
                <div className="alert alert-success" role="alert" style={{display: this.state.sucessfully ? 'block' : 'none' }} >
                    Your info was sucessfully sent!
                </div>
                
			</div>
		)
	}
}

export default CaseStudy;