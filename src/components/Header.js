import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to='/'>Home</NavLink>
                {this.props.token &&
                    <>
                        <NavLink to='/todo'>Todo List</NavLink>
                        <button onClick={this.props.handleLogout}>Sign Out</button>
                    </>    
                }
                {!this.props.token &&
                    <>
                        <NavLink to='/signup'>Sign-Up</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </>
                }


            </header>
        )
    }
}
