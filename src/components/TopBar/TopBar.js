/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import './topBar.css'
import imgUrl from '../../static/img/flower-white.png'
// import ReactDOM from 'react-dom';

class TopBar extends Component {
    constructor(props){
        super(props)
        this.onBack = this.onBack.bind(this);//返回上一级
        this.onChange = this.onChange.bind(this);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="topBar">
                <img src={imgUrl} className="logoStyle" alt="logo"></img>
                <div className="title">PengHan</div>
                <input className="topSearch" placeholder="Search" />
            </div>
         );
    }
    onBack(){
        console.log("返回上一级");
    }
    onChange(checkedValue){
        console.log("checked=",checkedValue);
    }
}
 
export default TopBar;
