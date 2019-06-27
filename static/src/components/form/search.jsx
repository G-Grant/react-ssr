import React, { Component } from 'react';
import Input from './input';
import Button from './button';

export default class Search extends Component{
    render(){
        return (
            <div className="ge-search">
                <Input />
                <Button text="搜索" />
            </div>
        )
    }
}