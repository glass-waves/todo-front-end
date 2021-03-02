import './App.css';
import  HomePage  from './HomePage.js';
import  LoginPage  from './Auth/LoginPage.js';
import  SignupPage  from './Auth/SignupPage.js';
import  TodoListPage  from './TodoListPage.js';
import Header from './components/Header.js'
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';





export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            component={LoginPage} 
                        />            
                        <Route 
                            path="/signup" 
                            exact
                            component={SignupPage} 
                        />
                        <Route 
                            path="/todo" 
                            exact
                            component={TodoListPage} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}


