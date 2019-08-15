import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar/TopBar'
import LeftBar from './components/LeftBar/LeftBar'
import Index from './index/index'
import PersonalCenter from './personalCenter/personalCenter'

class App extends Component {
    state = {  }
    render() { 
        return (  
            <div className="App">
                <Router>
                    <TopBar />
                    <LeftBar />
                    <Route exact path="/index" component={Index} />
                    <Route path="/personalCenter" component={PersonalCenter} />
                </Router>
            </div>
        );
    }
}
 
export default App;