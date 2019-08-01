import React from 'react';
import ReactDOM from 'react-dom';

import './box.less';

export default class Box extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount');
        document.addEventListener('click', this.handleClickDocument)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        document.removeEventListener('click', this.handleClickDocument)
    }

    handleClick = () => {
        this.node.classList.add('blue');
        console.log('我已经是蓝色了');
    }

    handleClickDocument = ()=>{
        this.node.classList.add('yellow');
    }

    render(){
        return (
            <div ref={node=>this.node=node} className="box" onClick={this.handleClick}>This is a box</div>
        )
    }
}