import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { loginUser } from '../api-utils.js'

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const user = await loginUser(this.state.email, this.state.password);
        const token = user.token;
        this.props.handleToken(token)
        this.props.history.push('/todo')
    }

    render() {
        console.log(this.state)
        return (
            <div className="formCont">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        Email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>

                    <label htmlFor="">
                        Password:
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Submit</button>
                </form>
                <NavLink to='/signup'>Don't have an account? Click here to sign up.</NavLink>
            </div>
        )
    }
}
