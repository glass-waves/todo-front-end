import React, { Component } from 'react'

export default class SignupPage extends Component {
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
    handleSubmit = e => {
        e.preventDefault();

    }

    render() {
        console.log(this.state)
        return (
            <div>
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
            </div>
        )
    }
}
