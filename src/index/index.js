/* eslint-disable no-unused-vars */
/*
    作者： penghan
    时间： 2019-08-15
    描述： 首页
    参数： 
*/



import React, { Component } from 'react';
import Dialog from '../components/Dialog/Dialog'

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            dialog:{
                title:'弹出框',
                visible: false,
                width: "500",
            }
        }
        this.openDialog = this.openDialog.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    render() { 
        return ( 
            <div>
                <span onClick={this.openDialog}>弹出框 Open</span>
                <Dialog dialog={this.state.dialog}>
                    这是一个弹出框
                </Dialog>
            </div>
         );
    }
    openDialog(){
        let dailogOptions = {
            title:'弹出框',
            visible: true,
            width: "500",
            handleOk: this.handleOk,
            handleCancel: this.handleCancel,
        }
        this.setState({
            dialog: dailogOptions
        })
    }
    handleOk(){
        this.setState({
            dialog: {...this.state.dialog,visible:false},
        })
    }
    handleCancel(){
        this.setState({
            dialog: {...this.state.dialog,visible:false},
        })
    }
}
 
export default Index;