/*
    作者： penghan
    时间： 2019-08-16
    描述： 弹出框公共组件
    参数： dialog:{
            title:"",//标题
            visible: false,//是否显示
           }
*/

import React, { Component } from 'react';
import { Modal } from 'antd';
import 'antd/lib/date-picker/style/css';

class Dialog extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() { 
        return ( 
            <div>
                <Modal
                    title={this.props.dialog.title}
                    visible={this.props.dialog.visible}
                    width={this.props.dialog.width}
                    onOk={this.props.dialog.handleOk}
                    onCancel={this.props.dialog.handleCancel}
                ></Modal>
            </div>
         );
    }
}
 
export default Dialog;