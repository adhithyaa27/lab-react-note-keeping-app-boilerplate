import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    render() {
        return (
            <div className="container">
                
                <div className="input">
                    <h3>INPUT</h3>
                    <textarea className="input-box" onChange={this.handleInputChange} value={this.state.inputText}/>
                </div>

                <div className="output">
                    <h3>PRO NOTE</h3>
                    <textarea className='output-box' value={this.state.inputText} readOnly/>

                </div>
            </div>
        );
    }
}

export default Note;
