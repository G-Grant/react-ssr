import React, { Component } from 'react';

import './input.less';

export default class Input extends Component{

    constructor(props){
        super(props);
        this.changeInput = this.changeInput.bind(this);
        this.state = {
            value: ''
        }
    }

    changeInput(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        let { value } = this.state;
        return (
            <div className="ge-input">
                <input type="text" value={value} onChange={this.changeInput} />
            </div>
        )
    }
}