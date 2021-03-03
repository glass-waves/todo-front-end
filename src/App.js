import './App.css';
import HomePage from './HomePage.js';
import LoginPage from './Auth/LoginPage.js';
import SignupPage from './Auth/SignupPage.js';
import TodoListPage from './TodoListPage.js';
import Header from './components/Header.js'
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


    render() {
        console.log('state in app.js', this.state)
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
                        <Route
                            path="/todo"
                            exact
                            render={(props) => (
                                <TodoListPage {...props} token={this.state.token} />
                            )}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}


