import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/signup'>Sign-Up</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/todo'>Todo List</NavLink>
            </header>
        )
    }
}