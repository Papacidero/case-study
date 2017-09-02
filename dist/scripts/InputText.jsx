import React from 'react';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            width: '100%',
        }
    }
    handleChanges(e){
        e.preventDefault()
        if (this.props.callback) this.props.callback(e);
    }
    render() {
        return (<input type="text" 
                    placeholder={this.props.placeholder}
                    className={this.props.class}
                    style={this.style}
                    onChange={this.handleChanges.bind(this)}
                    onKeyUp={this.handleChanges.bind(this)}
                    data-type={this.props.type}
                />);
    }
}

export default InputText;