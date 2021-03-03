import './App.css';
import HomePage from './HomePage.js';
import LoginPage from './Auth/LoginPage.js';
import SignupPage from './Auth/SignupPage.js';
import TodoListPage from './TodoListPage.js';
import Header from './components/Header.js'
import PrivateRoute from './components/PrivateRoute.js'
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { getTokenFromLocalStorage, putTokenInLocalStorage } from './local-storage-utils';



export default class App extends Component {
    state = {
        token: getTokenFromLocalStorage()
    }

    handleToken = (token) => {
        this.setState({
            token
        })
        putTokenInLocalStorage(token);
    }
    handleLogout = () => {
        this.setState({
            token: ''
        })
        putTokenInLocalStorage('');
    }

    render() {
        console.log('state in app.js', this.state)
        return (
            <div>
                <Router>
                    <Header 
                    handleLogout={this.handleLogout} 
                    token = {this.state.token}
                    />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={HomePage}
                        />
                        <Route
                            path="/login"
                            exact
                            render={(props) => (
                                <LoginPage {...props} handleToken={this.handleToken} />
                            )}
                        />
                        <Route
                            path="/signup"
                            exact
                            render={(props) => (
                                <SignupPage {...props} handleToken={this.handleToken} />
                            )}
                        />
                        <PrivateRoute
                            path="/todo"
                            exact
                            token={this.state.token}
                            render={(routerProps) =>
                                <TodoListPage
                                    user={this.state.token}
                                    {...routerProps}
                                />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}


