import React from 'react';
import ReactDOM from 'react-dom';

import './box.less';

export default class Box extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.node.classList.add('blue');
        console.log('我已经是蓝色了');
    }

    render(){
        return (
            <div ref={node=>this.node=node} className="box" onClick={this.handleClick}>This is a box</div>
        )
    }
}