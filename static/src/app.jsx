import React, { Component } from 'react';

import Input from './components/form/input';
import Button from './components/form/button';
import Search from './components/form/search';

import jpeg from '../assets/1.jpeg';

export default class Main extends Component{
    render(){
        return (
            <div>
                <Input />
                <Button text="add" />
                <Search />
                <img src={jpeg} />
            </div>
        )
    }
}