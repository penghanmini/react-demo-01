import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './leftBar.css'

class LeftBar extends Component {
    constructor(props){
        super(props)
        this.state={
            router: [
                {
                    title:'首页',
                    url:'/index',
                    show: true,
                },
                {
                    title:'个人中心',
                    url:'/personalCenter',
                    show: false,
                },
                {
                    title:'学习',
                    url:'/study',
                    show: true,
                },
                {
                    title:'生活',
                    url:'/life',
                    show: true,
                },
            ]
        }
    }
    render() { 
        return ( 
            <div className="leftBar">
                {
                    this.state.router.map((item,index)=>{
                        return (
                            <NavLink 
                                exact={index == 0?true:false} 
                                to={item.url} 
                                key={index}> 
                                    {item.title}
                            </NavLink>
                        )  
                    })
                }
            </div>
         );
    }
}
 
export default LeftBar;