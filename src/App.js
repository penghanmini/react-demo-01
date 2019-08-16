/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar/TopBar'
import LeftBar from './components/LeftBar/LeftBar'
import Index from './index/index'
import PersonalCenter from './personalCenter/personalCenter'

class App extends Component {
    //在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state={}
    }
    UNSAFE_componentWillMount(){}
    componentDidMount(){}
    render() { 
        return (  
            <div className="App">
                <Router>
                    <TopBar />
                    <LeftBar />
                    <Route exact={true} path="/index" component={Index} />
                    <Route path="/personalCenter" component={PersonalCenter} />
                </Router>
            </div>
        );
    }
}
 
export default App;