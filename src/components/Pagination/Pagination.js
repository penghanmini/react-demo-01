/* eslint-disable no-unused-vars */
/*
  作者： penghan
  时间： 2019-08-16
  描述： 分页公共组件
  参数：
*/

import React, { Component } from 'react'
import {Pagination} from 'antd'

class Page extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return ( 
            <div>
                <Pagination
                    total={this.props.pageInfo.total}
                    current={this.props.pageInfo.pageNum}
                    pageSize={this.props.pageInfo.pageSize}
                    showTotal={()=>{
                        return `共${this.props.pageInfo.total}条`
                    }}
                    showSizeChanger
                    showQuickJumper
                    onChange={this.props.pageInfo.handleCurrentChange}
                    onShowSizeChange={this.props.pageInfo.handleSizeChange}
                ></Pagination>
            </div>
        );
    }
}

export default Page;