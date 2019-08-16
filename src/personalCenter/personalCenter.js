/* eslint-disable no-unused-vars */
/*
  作者： penghan
  时间：
  描述：
  参数：
*/

import React, { Component } from 'react'
import {Pagination} from 'antd'

class PersonalCenter extends Component {
    constructor(props){
        super(props)
        this.state={
            pageInfo:{
                total: 20,
                pageNum: 1,
                pageSize: 10,
                handleCurrentChange: this.handleCurrentChange,
                handleSizeChange: this.handleSizeChange,
            }
        }
        this.handleCurrentChange = this.handleCurrentChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }
    render() {
        return ( 
            <div>
                <Pagination pageInfo={this.state.pageInfo}></Pagination>
            </div>
        );
    }
    handleCurrentChange(val){
        console.log(1);
    }
    handleSizeChange(val){
        console.log(2);
    }
}

export default PersonalCenter;