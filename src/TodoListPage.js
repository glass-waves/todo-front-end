import React, { Component } from 'react'
import { addTodoItem, completeListItem, getTodoList } from './api-utils'

export default class TodoListPage extends Component {
    state = {
        token: this.props.token,
        todos: [],
        todo: ''
    }

    componentDidMount = async() => {
        await this.fetchTodoList();
    }

    fetchTodoList = async () => {
        const list = await getTodoList(this.state.token);
        this.setState({
            todos: list
        })
    }

    handleCompleted = async (todoId) => {
        await completeListItem(todoId, this.props.token)
        this.fetchTodoList();
    }
    
    handleInputChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    addItemHandler = async () => {
        await addTodoItem(this.state.todo, this.state.token);
        await this.fetchTodoList()
    }

    render() {
        return (
            <div className="listCont">
                <div className="add">
                    <label>
                        Add an item to the todo list:
                    <input type="text" value={this.state.togo} onChange={this.handleInputChange}/>
                    </label>
                    <button onClick={this.addItemHandler}>Add Item</button>
                </div>
                
                {this.state.todos.length < 1 && <p>Nothing to do yet!</p>}
                {this.state.todos.map(todo =>
                    <p 
                    key={`{todo.todo}`}
                    onClick={() => this.handleCompleted(todo.id)}
                    className={`
                    todo ${todo.completed 
                        ? 'completed' 
                        : ''}`
                    }
                    >
                        {todo.todo}
                    </p>)
                }
            </div>
        )
    }
}
