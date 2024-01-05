import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
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
                    <h3>Input</h3>
                    <textarea
                        className="input-text"
                        onChange={this.handleInputChange}
                        value={this.state.inputText}
                    />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    {/* <div className="output-text">{this.state.inputText}</div> */}
                    <textarea className='output-text' value={this.state.inputText} readOnly/>

                </div>
            </div>
        );
    }
}

export default Editor;
